package com.sbank.spring.controller;

import java.util.List;

import com.sbank.spring.dto.AccountDto;
import com.sbank.spring.dto.DepositDto;
import com.sbank.spring.dto.HistoryDto;
import com.sbank.spring.dto.TransferDto;
import com.sbank.spring.entity.History;
import com.sbank.spring.service.AccountService;

import org.springframework.http.HttpStatus;
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


@Tag(name = "AccountController", description = "계좌 관리 API")
@CrossOrigin(value = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE })
@RestController
@RequestMapping("/api/account")
@RequiredArgsConstructor
public class AccountController {

    private final AccountService accountService;

    @Operation(summary="자신의 계좌 조회")
    @GetMapping(value="/lookup")
    public ResponseEntity<AccountDto> createAccount() {
        return ResponseEntity.ok(accountService.findMyAccount());
    }

    @Operation(summary = "계좌번호로 사용자 조회", description="있는 계좌번호라면 사용자 이름, 없는 계좌번호라면 no 리턴")
    @GetMapping(value = "/find/byAccount/{account}")
    public ResponseEntity<String> findUserNameByAccount(@PathVariable String account) {
        return ResponseEntity.ok(accountService.findUserNameByAccount(account));
    }

    @Operation(summary = "잔액 조회")
    @GetMapping(value="/find/account/balance/{account}")
    public ResponseEntity<Integer> findBalanceByAccountNumber(@PathVariable String account) {
        return ResponseEntity.ok(accountService.findBalanceByAccountNumber(account));
    }
    
    @Operation(summary = "계좌 이체", description="0: 출금, 1: 입금")
    @PostMapping(value="/transfer")
    public ResponseEntity<HistoryDto> transferMoney(@RequestBody TransferDto transferDto) {
        HistoryDto historyDto = accountService.transferMoney(transferDto);
        if(historyDto != null) return ResponseEntity.ok(historyDto);
        else return new ResponseEntity<>(historyDto, HttpStatus.FORBIDDEN);
    }

    @Operation(summary = "내역 조회")
    @GetMapping(value="/find/account/record/{account}")
    public ResponseEntity<List<History>> recordHistory(@PathVariable String account) {
        return ResponseEntity.ok(accountService.recordHistory(account));
    }

    @Operation(summary = "이름으로 계좌번호 조회")
    @GetMapping(value="/find/byUser/{username}")
    public ResponseEntity<List<String>> findAccountsByUserName(@PathVariable String username) {
        return ResponseEntity.ok(accountService.findAccountsByUserName(username));
    }

    @Operation(summary = "입금")
    @PutMapping(value="/deposit")
    public ResponseEntity<AccountDto> depositMoney(@RequestBody DepositDto depositDto) {
        return ResponseEntity.ok(accountService.depositMoney(depositDto));
    }

    @Operation(summary = "월별 소비(송금) 내역 조회")
    @GetMapping(value="/find/account/consumption/history/{year}")
    public ResponseEntity<List<Integer>> consumptionHistory(@PathVariable int year) {
        return ResponseEntity.ok(accountService.consumptionHistory(year));
    }
    
}