package com.sbank.spring.jwt;

import java.security.Key;
import java.util.Arrays;
import java.util.Collection;
import java.util.Date;
import java.util.stream.Collectors;

import com.sbank.spring.dto.TokenDto;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.UnsupportedJwtException;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Component
public class TokenProvider implements InitializingBean{

    private final Logger logger = LoggerFactory.getLogger(TokenProvider.class);
    
    private static final String AUTHORITIES_KEY = "auth";
    private static final String BEARER_TYPE = "bearer";
    private static final Long ACCESS_TOKEN_EXPIRE_TIME = 1000*60*60*6*1L;          // 6시간(1일: 1000*60*60*24*1L=86400000L)
    private static final Long REFRESH_TOKEN_EXPIRE_TIME = 1000*60*60*24*7L; // 1주일

    private final String secret;

    private Key key;

    public TokenProvider(@Value("${jwt.secret}") String secret) {
        this.secret = secret;
    }

    @Override
    public void afterPropertiesSet() { //빈 생성되고 주입 받은 후에 secret값을 BASE64 Decode해서 key변수에 할당 위해 사용
        byte[] keyBytes = Decoders.BASE64.decode(secret);
        this.key = Keys.hmacShaKeyFor(keyBytes);
    }

    //토큰 생성
    public TokenDto createToken(Authentication authentication) {
        //권한들 가져오기
        String authorities = authentication.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .collect(Collectors.joining(","));
        
        long now = (new Date()).getTime();
        Date accessTokenValidity = new Date(now + ACCESS_TOKEN_EXPIRE_TIME); //만료시간 설정
        Date refreshTokenValidity = new Date(now + REFRESH_TOKEN_EXPIRE_TIME); //만료시간 설정
        
        //accessToken 생성
        String accessToken = Jwts.builder()
                .setSubject(authentication.getName())
                .claim(AUTHORITIES_KEY, authorities)
                .signWith(key, SignatureAlgorithm.HS512)
                .setExpiration(accessTokenValidity)
                .compact();
        
        //refreshToken 생성
        String refreshToken = Jwts.builder()
                .signWith(key, SignatureAlgorithm.HS512)
                .setExpiration(refreshTokenValidity)
                .compact();
        
        return TokenDto.builder()
                .grantType(BEARER_TYPE)
                .accessToken(accessToken)
                .accessTokenExpiresIn(accessTokenValidity.getTime())
                .refreshToken(refreshToken)
                .build();
    }
    
    //Token에 담겨있는 정보 이용해 Authentication 객체 리턴
    public Authentication getAuthentication(String accessToken) {
        //토큰 이용해 클레임 생성
        Claims claims = Jwts
                .parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(accessToken)
                .getBody();
        
        // 클레임에서 권한 정보 가져오기
        Collection<? extends GrantedAuthority> authorities =
                Arrays.stream(claims.get(AUTHORITIES_KEY).toString().split(","))
                        .map(SimpleGrantedAuthority::new)
                        .collect(Collectors.toList());
        
        //권한 정보 이용해서 User 객체 생성
        User principal = new User(claims.getSubject(), "", authorities);
        
        return new UsernamePasswordAuthenticationToken(principal, accessToken, authorities); //User객체, accessToken, 권한 정보
    }

    //토큰 유효성 검증
    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
            return true;
        } catch (io.jsonwebtoken.security.SecurityException | MalformedJwtException e) {
            logger.info("잘못된 JWT 서명입니다.");
        } catch (ExpiredJwtException e) {
            logger.info("만료된 JWT 토큰입니다.");
        } catch (UnsupportedJwtException e) {
            logger.info("지원되지 않는 JWT 토큰입니다.");
        } catch (IllegalArgumentException e) {
            logger.info("JWT 토큰이 잘못되었습니다.");
        }
        return false; //문제가 있을 경우 return false
    }
}
