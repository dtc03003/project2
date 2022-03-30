package com.sbank.spring.config;

import com.sbank.spring.jwt.JwtAccessDeniedHandler;
import com.sbank.spring.jwt.JwtAuthenticationEntryPoint;
import com.sbank.spring.jwt.JwtSecurityConfig;
import com.sbank.spring.jwt.TokenProvider;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@EnableWebSecurity //Web 보안 활성화
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    private final TokenProvider tokenProvider;
    private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
    private final JwtAccessDeniedHandler jwtAccessDeniedHandler;

    public SecurityConfig(
            TokenProvider tokenProvider,
            JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint,
            JwtAccessDeniedHandler jwtAccessDeniedHandler
    ) {
        this.tokenProvider = tokenProvider;
        this.jwtAuthenticationEntryPoint = jwtAuthenticationEntryPoint;
        this.jwtAccessDeniedHandler = jwtAccessDeniedHandler;
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Override
    public void configure(WebSecurity web) {
        web
            .ignoring()
            .antMatchers("/swagger-ui/**", "/swagger-ui.*/**", "/api-docs/**");
            //위의 요청들은 spring security 로직 수행X
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .csrf().disable() //token 방식 사용하기 때문에 설정

            .exceptionHandling() //exception을 핸들링할 때 만든 클래스들을 아래에 추가
            .authenticationEntryPoint(jwtAuthenticationEntryPoint)
            .accessDeniedHandler(jwtAccessDeniedHandler)

            .and()
            .sessionManagement()
            .sessionCreationPolicy(SessionCreationPolicy.STATELESS) //sesssion 사용하지 않으므로 세션 설정은 STATELESS로 설정

            .and()
            .authorizeRequests() //HttpServletRequest를 사용하는 요청들에 대한 접근 제한을 설정
            //()안의 api에 대한 요청은 인증없이 접근을 허용함
            // .antMatchers("/api/user/**").permitAll()
            .antMatchers("/api/user/signin").permitAll() //로그인 API
            .antMatchers("/api/user/signup").permitAll() //회원가입 API
            .antMatchers("/api/user/duplicate/**").permitAll() //중복검사 API
            .antMatchers("/api/user/reissue/token").permitAll() //토큰 재발급 API
            .antMatchers("/swagger-ui.html", "/swagger-ui/**", "/api-docs", "/api-docs/**").permitAll()
            .anyRequest().authenticated() //나머지 요청들은 모두 인증되어야 함

            .and()
            .apply(new JwtSecurityConfig(tokenProvider)); //JwtSecurityConfig 클래스 적용
    }
    
}
