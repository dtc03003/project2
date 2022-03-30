package com.sbank.spring.dto;

import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.sbank.spring.entity.Member;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.crypto.password.PasswordEncoder;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder //데이터 일관성을 위해 정보들을 다 받은 후에 객체를 생성
public class MemberDto {

    @NotNull
    private String id; //아이디

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @NotNull
    private String password; //비밀번호

    @NotNull
    private String name; //이름

    @NotNull
    private String email; //이메일

    @NotNull
    private String birthday; //생년월일

    @NotNull
    private String phone; //전화번호
    
    private String authority; //유형(사용자, 관리자)

    public static Member toEntity(MemberDto memberDto, PasswordEncoder passwordEncoder) {
        return Member.builder()
                    .id(memberDto.getId())
                    .password(passwordEncoder.encode(memberDto.getPassword()))
                    .name(memberDto.getName())
                    .email(memberDto.getEmail())
                    .birthday(memberDto.getBirthday())
                    .phone(memberDto.getPhone())
                    .authority(memberDto.getAuthority())
                    .build();
    }

    public static MemberDto from(Member member) {
        if(member == null) return null;
        return MemberDto.builder()
        .id(member.getId())
        .name(member.getName())
        .email(member.getEmail())
        .birthday(member.getBirthday())
        .phone(member.getPhone())
        .authority(member.getAuthority())
        .build();
    }

}