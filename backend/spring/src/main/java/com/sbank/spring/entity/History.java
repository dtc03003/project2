package com.sbank.spring.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "history")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class History {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long historyId;

    @Column
    private Long accountId;

    @Column(nullable = false)
    private String sender;

    @Column(nullable = false)
    private String senderAccount;

    @Column(nullable = false)
    private String receiver;

    @Column(nullable = false)
    private String receiverAccount;

    @Column(columnDefinition = "TINYINT", length=1) //0: 입금,송금, 1: 받은 내역
    private int statement;

    @Column
    private int money;

    @Column(nullable = false)
    private String transactionDate;
}
