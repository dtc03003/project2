package com.sbank.spring.entity;

import java.io.Serializable;
import java.util.Collection;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity //DB의 테이블과 1:1 매핑되는 객체
@Table(name = "member") //테이블명 member로 지정
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class Member implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //자동 증가
    private Long no;

    @Column(nullable = false, unique = true)
    private String id;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String phone;

    @Column(nullable = false)
    private String birthday;

    @Column(nullable = false)
    private String authority;

    @OneToMany
    @JoinColumn(name = "memberNo")
    private Collection<Account> accounts; //FK 설정
}