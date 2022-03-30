package com.sbank.spring.service;

import javax.transaction.Transactional;

import com.sbank.spring.dto.ChangePwdDto;
import com.sbank.spring.dto.MemberDto;
import com.sbank.spring.entity.Member;
import com.sbank.spring.repository.MemberRepository;
import com.sbank.spring.util.SecurityUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MemberService {

    @Autowired
    private final MemberRepository memberRepository;
    @Autowired
    private final PasswordEncoder passwordEncoder;
    
    @Transactional //트랜잭션 속성 부여
    public Member signup(MemberDto memberDto) {
        memberDto.setAuthority("ROLE_USER"); //lombok 방식으로 해결되면 지울 것!
        return memberRepository.save(MemberDto.toEntity(memberDto, passwordEncoder));
    }

    @Transactional //아이디 중복 검사
    public boolean duplicateId(String id) {
        return memberRepository.existsById(id);
    }

    @Transactional //이메일 중복 검사
    public boolean duplicateEmail(String email) {
        return memberRepository.existsByEmail(email);
    }

    @Transactional //회원 정보 조회
    public MemberDto memberInfo() {
        return MemberDto.from(memberRepository.findById(SecurityUtil.getCurrentMemberId()));
    }

    @Transactional //비밀번호 변경
    public boolean changePwd(ChangePwdDto changePwdDto) {
        Member member = memberRepository.findById(SecurityUtil.getCurrentMemberId());
        //matches: 사용자에게 입력받은 패스워드를 비교하고자 할 때 사용
        boolean check = passwordEncoder.matches(changePwdDto.getOldPassword(), member.getPassword());
        if(check) {
            member.setPassword(passwordEncoder.encode(changePwdDto.getNewPassword()));
            memberRepository.save(member);
            return true;
        }else return false; //비밀번호 불일치로 변경 실패
    }
}
