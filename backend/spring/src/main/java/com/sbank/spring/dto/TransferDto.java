package com.sbank.spring.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TransferDto {
    
    private String sender;

    private String senderAccount;

    private String receiver;

    private String receiverAccount;

    private int statement;

    private int money;

    private String transactionDate;
}
