package com.sbank.spring.dto;

import com.sbank.spring.entity.Account;
import com.sbank.spring.entity.History;

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
public class HistoryDto {

    private String sender;

    private String senderAccount;

    private String receiver;

    private String receiverAccount;

    private int statement;

    private int money;

    private String transactionDate;

    public static History toEntity(TransferDto transferDto, Long accountId) {
        return History.builder()
                    .accountId(accountId)
                    .sender(transferDto.getSender())
                    .senderAccount(transferDto.getSenderAccount())
                    .receiver(transferDto.getReceiver())
                    .receiverAccount(transferDto.getReceiverAccount())
                    .statement(transferDto.getStatement())
                    .money(transferDto.getMoney())
                    .transactionDate(transferDto.getTransactionDate())
                    .build();
    }

    public static HistoryDto from(History history) {
        if(history == null) return null;
        return HistoryDto.builder()
                    .sender(history.getSender())
                    .receiver(history.getReceiver())
                    .statement(history.getStatement())
                    .money(history.getMoney())
                    .transactionDate(history.getTransactionDate())
                    .build();
    }

    public static History deposit(Account account, String name, DepositDto depositDto) {
        return History.builder()
                    .accountId(account.getAccountId())
                    .sender(name)
                    .senderAccount(account.getAccountNumber())
                    .receiver(name)
                    .receiverAccount(account.getAccountNumber())
                    .statement(1)
                    .money(depositDto.getMoney())
                    .transactionDate(depositDto.getTransactionDate())
                    .build();
    }
}
