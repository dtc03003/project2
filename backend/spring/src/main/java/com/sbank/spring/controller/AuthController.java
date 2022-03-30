package com.sbank.spring.controller;

import javax.validation.Valid;

import com.sbank.spring.dto.AccountDto;
import com.sbank.spring.dto.ChangePwdDto;
import com.sbank.spring.dto.MemberDto;
import com.sbank.spring.dto.ReissueDto;
import com.sbank.spring.dto.SigninDto;
import com.sbank.spring.dto.TokenDto;
import com.sbank.spring.entity.Member;
import com.sbank.spring.service.AccountService;
import com.sbank.spring.service.AuthService;
import com.sbank.spring.service.MemberService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "AuthController", description = "회원 관리 API")
@CrossOrigin(value = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE })
@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;
    private final MemberService memberService;
    private final AccountService accountService;
    
    @Operation(summary="로그인")
    @PostMapping("/signin")
    public ResponseEntity<TokenDto> signin(@Valid @RequestBody SigninDto signinDto) {
        return ResponseEntity.ok(authService.signin(signinDto));
    }

    @Operation(summary="회원가입", description="회원가입 성공 시 true, 실패 시 false 리턴")
    @PostMapping("/signup")
    public ResponseEntity<Boolean> signup(@Valid @RequestBody MemberDto memberDto) {
        Member member = memberService.signup(memberDto);
        if(member != null) {
            AccountDto accountDto = accountService.createAccount(member); //1인 1계좌만 생성
            if(accountDto != null) return ResponseEntity.ok(true);
            else return ResponseEntity.ok(false);
        }else return ResponseEntity.ok(false);
    }

    @Operation(summary="아이디 중복 검사", description="있는 아이디라면 true, 없는 아이디라면 false 리턴")
    @GetMapping("/duplicate/id/{id}")
    public ResponseEntity<Boolean> duplicateId(@PathVariable String id) {
        return ResponseEntity.ok(memberService.duplicateId(id));
    }

    @Operation(summary="이메일 중복 검사", description="있는 이메일라면 true, 없는 이메일라면 false 리턴")
    @GetMapping("/duplicate/email/{email}")
    public ResponseEntity<Boolean> duplicateEmail(@PathVariable String email) {
        return ResponseEntity.ok(memberService.duplicateEmail(email));
    }

    @Operation(summary="회원 정보 조회")
    @PostMapping("/info")
    public ResponseEntity<MemberDto> userInfo() {
        return ResponseEntity.ok(memberService.memberInfo());
    }

    @Operation(summary = "비밀번호 변경", description = "비밀번호 변경 성공 시 true, 실패 시 false 리턴")
    @PutMapping("/changePwd")
    public ResponseEntity<Boolean> changePwd(@RequestBody ChangePwdDto changePwdDto) {
        return ResponseEntity.ok(memberService.changePwd(changePwdDto));
    }

    @Operation(summary = "토큰 재발급", description = "유효한 refresh token이면 재발급, 유효하지 않으면 재로그인해야 함")
    @PutMapping("/reissue/token")
    public ResponseEntity<TokenDto> postMethodName(@Valid @RequestBody ReissueDto reissueDto) {
        return ResponseEntity.ok(authService.reissueToken(reissueDto));
    }
}