package com.sbank.spring.repository;

import com.sbank.spring.entity.Account;
import com.sbank.spring.mapping.AccountNumberMapping;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Long>{
    Account findAccountByMemberNo(Long memberNo);
    boolean existsByAccountNumber(String accountNumber); //계좌번호 중복검사
    Account findByAccountNumber(String accountNumber); //계좌번호로 사용자 조회
    AccountNumberMapping findByMemberNo(Long no); //사용자번호(pk)로 계좌 조회
}
