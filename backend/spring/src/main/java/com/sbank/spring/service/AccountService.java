package com.sbank.spring.service;

import com.sbank.spring.repository.MemberRepository;
import com.sbank.spring.util.SecurityUtil;

import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import com.sbank.spring.dto.AccountDto;
import com.sbank.spring.dto.DepositDto;
import com.sbank.spring.dto.HistoryDto;
import com.sbank.spring.dto.TransferDto;
import com.sbank.spring.entity.Account;
import com.sbank.spring.entity.History;
import com.sbank.spring.entity.Member;
import com.sbank.spring.mapping.ConsumptionMapping;
import com.sbank.spring.mapping.NoMapping;
import com.sbank.spring.repository.AccountRepository;
import com.sbank.spring.repository.HistoryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AccountService {

    @Autowired
    private final MemberRepository memberRepository;
    @Autowired
    private final AccountRepository accountRepository;
    @Autowired
    private final HistoryRepository historyRepository;
    @Autowired
    private final PasswordEncoder passwordEncoder;

    @Transactional //계좌 생성
    public AccountDto createAccount(Member member) {
        Long memberNo = member.getNo();
        String accountNumber = "1129";
        boolean ok = false;
        while(!ok) {
            String middleNumber = Integer.toString((int)(Math.random() * 900) + 100); //100~1000 사이 숫자
            String lastNumber = Integer.toString((int)(Math.random() * 900000) + 100000); //100000~1000000 사이 숫자
            accountNumber += "-" + middleNumber + "-" + lastNumber;
            if(!accountRepository.existsByAccountNumber(accountNumber)) ok = true;
        }
        return AccountDto.from(accountRepository.save(AccountDto.toEntity(memberNo, accountNumber)));
    }

    @Transactional //자신의 계좌 조회
    public AccountDto findMyAccount() {
        Member member = memberRepository.findById(SecurityUtil.getCurrentMemberId());
        Long memberNo = member.getNo();
        return AccountDto.from(accountRepository.getById(memberNo));
    }

    @Transactional //계좌 번호로 사용자 조회
    public String findUserNameByAccount(String accountNumber) {
        if(accountRepository.existsByAccountNumber(accountNumber)) { //계좌가 존재하는 계좌인 경우
            Account account = accountRepository.findByAccountNumber(accountNumber);
            return memberRepository.findByNo(account.getMemberNo()).getName();
        }else return "no";
    }

    @Transactional //잔액 조회
    public Integer findBalanceByAccountNumber(String accountNumber) {
        Account account = accountRepository.findByAccountNumber(accountNumber);
        return account.getBalance();
    }

    @Transactional //계좌 이체
    public HistoryDto transferMoney(TransferDto transferDto) {
        Member member = memberRepository.findById(SecurityUtil.getCurrentMemberId());
        boolean check = passwordEncoder.matches(transferDto.getPassword(), member.getPassword());
        System.out.println(check);
        if(check) { //비밀번호 불일치 시 이체 불가
            Account senderAccount = accountRepository.findByAccountNumber(transferDto.getSenderAccount());
            Account receiverAccount = accountRepository.findByAccountNumber(transferDto.getReceiverAccount());
            if(senderAccount != null && receiverAccount != null) { // 두 계좌 모두 존재하는 계좌
                int balance = senderAccount.getBalance();
                if(balance >= transferDto.getMoney()) { //보낼 금액보다 크거나 같은 경우만 가능
                    History history = historyRepository.save(HistoryDto.toEntity(transferDto, senderAccount.getAccountId()));
                    senderAccount.setBalance(balance - transferDto.getMoney());
                    accountRepository.save(senderAccount);
    
                    transferDto.setStatement(1);
    
                    historyRepository.save(HistoryDto.toEntity(transferDto, receiverAccount.getAccountId()));
                    receiverAccount.setBalance(receiverAccount.getBalance() + transferDto.getMoney());
                    accountRepository.save(receiverAccount);
                    return HistoryDto.from(history);
                }else return null;
            }else return null;
        }else return null;
    }

    @Transactional //내역 조회
    public List<History> recordHistory(String accountNumber) {
        Account account = accountRepository.findByAccountNumber(accountNumber);
        return historyRepository.findByAccountId(account.getAccountId());
    }

    @Transactional //이름으로 계좌번호 조회
    public List<String> findAccountsByUserName(String username) {
        List<NoMapping> noList = memberRepository.findByName(username);
        List<String> accountNumList = new ArrayList<String>();
        for(int i = 0; i < noList.size(); ++i) {
            accountNumList.add(accountRepository.findByMemberNo(noList.get(i).getNo()).getAccountNumber());
        }
        return accountNumList;
    }

    @Transactional //내 계좌로 입금
    public AccountDto depositMoney(DepositDto depositDto) {
        Member member = memberRepository.findById(SecurityUtil.getCurrentMemberId()); //자신 정보 가져오기
        Account account = accountRepository.findAccountByMemberNo(member.getNo()); //본인 계좌 정보 가져오기
        account.setBalance(account.getBalance() + depositDto.getMoney()); //잔액 변경
        History history = historyRepository.save(HistoryDto.deposit(account, member.getName(), depositDto)); //내역 반영
        HistoryDto.from(history);
        return AccountDto.from(accountRepository.save(account)); //입금 반영
    }

    public List<Integer> consumptionHistory(int year) { // 월별 소비 내역
        Member member = memberRepository.findById(SecurityUtil.getCurrentMemberId()); //자신 정보 가져오기
        Account account = accountRepository.findAccountByMemberNo(member.getNo()); //본인 계좌 정보 가져오기
        List<Integer> list = new ArrayList<Integer>();
        List<ConsumptionMapping> consumList = historyRepository.findByTransactionDateLikeAndAccountIdAndStatement(Integer.toString(year) + "%", account.getAccountId(), 0);

        int i = 0;
        for(int m=1; m<=12; ++m) {
            int sum = 0;
            while(i < consumList.size() && m <= 12) {
                ConsumptionMapping data = consumList.get(i);
                if(data.getSenderAccount().equals(data.getReceiverAccount())) {
                    ++i;
                    continue; //입금 내역은 제외
                }
                int month = Integer.parseInt(data.getTransactionDate().substring(5, 7)); //수정 가능성 있음!(날짜 어떻게 보낼지 상의 필요)
                if(month == m) sum += data.getMoney();
                else break;
                ++i;
            }
            list.add(sum);
        }
        return list;
    }
    

}