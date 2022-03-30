package com.sbank.spring.entity;

import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "account")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Account {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long accountId;

    @Column
    private Long memberNo;

    @Column(nullable = false)
    private String bankName;

    @Column(nullable = false, unique = true)
    private String accountNumber;

    @Column
    private int balance;

    @Column(nullable = false)
    private String creationDate;

    @OneToMany
    @JoinColumn(name = "accountId")
    private Collection<History> historys; //FK 설정
}