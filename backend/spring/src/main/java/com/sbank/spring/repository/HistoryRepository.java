package com.sbank.spring.repository;

import java.util.List;

import com.sbank.spring.entity.History;
import com.sbank.spring.mapping.ConsumptionMapping;

import org.springframework.data.jpa.repository.JpaRepository;

public interface HistoryRepository extends JpaRepository<History, Long>{
    List<History> findByAccountIdOrderByTransactionDateDesc(Long accountId);
    List<ConsumptionMapping> findByTransactionDateLikeAndAccountIdAndStatement(String year, Long accountId, int statement);
}
