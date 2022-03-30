package com.sbank.spring.service;

import javax.transaction.Transactional;

import com.sbank.spring.dto.ReissueDto;
import com.sbank.spring.dto.SigninDto;
import com.sbank.spring.dto.TokenDto;
import com.sbank.spring.entity.RefreshToken;
import com.sbank.spring.jwt.TokenProvider;
import com.sbank.spring.repository.RefreshTokenRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {

    @Autowired
    private final TokenProvider tokenProvider;
    @Autowired
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    @Autowired
    private final RefreshTokenRepository refreshTokenRepository;

    @Transactional
    public TokenDto signin(SigninDto signinDto) {
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(signinDto.getId(), signinDto.getPassword());
        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);
        SecurityContextHolder.getContext().setAuthentication(authentication); //authentication 객체를 securitycontext에 저장
        TokenDto tokenDto = tokenProvider.createToken(authentication); //jwt token 생성
        RefreshToken refreshToken = RefreshToken.builder()
                .tokenKey(authentication.getName())
                .value(tokenDto.getRefreshToken())
                .build();
        refreshTokenRepository.save(refreshToken);
        return tokenDto;
    }

    @Transactional
    public TokenDto reissueToken(ReissueDto reissueDto) {
        if(!tokenProvider.validateToken(reissueDto.getAccessToken())) throw new AccessDeniedException("유효하지 않은 token입니다.");
        String id = refreshTokenRepository.findKeyByValue(reissueDto.getRefreshToken()).getTokenKey();
        if(id.isEmpty() || id == null) throw new AccessDeniedException("유효하지 않은 token입니다.");

        RefreshToken refreshToken = refreshTokenRepository.findByTokenKey(id);
        
        if(!tokenProvider.validateToken(reissueDto.getRefreshToken()) || !reissueDto.getRefreshToken().equals(refreshToken.getValue()))
            throw new AccessDeniedException("유효하지 않은 token입니다.");

        Authentication authentication = tokenProvider.getAuthentication(reissueDto.getAccessToken());
        TokenDto tokenDto = tokenProvider.createToken(authentication); //새로운 토큰 생성
        RefreshToken newRefreshToken = RefreshToken.builder()
                .tokenKey(authentication.getName())
                .value(tokenDto.getRefreshToken())
                .build();
        refreshTokenRepository.save(newRefreshToken);
        return tokenDto;
    }
}
