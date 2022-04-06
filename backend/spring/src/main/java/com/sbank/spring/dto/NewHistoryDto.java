package com.sbank.spring.dto;

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
public class NewHistoryDto {

    private String sender;

    private String senderAccount;

    private String receiver;

    private String receiverAccount;

    private String statement;

    private int money;

    private String transactionDate;

    public static NewHistoryDto from(History history) {
        if(history == null) return null;
        return NewHistoryDto.builder()
                    .sender(history.getSender())
                    .receiver(history.getReceiver())
                    .statement(history.getStatement() == 0 ? "출금" : "입금")
                    .money(history.getMoney())
                    .transactionDate(history.getTransactionDate())
                    .build();
    }
}
