package com.sbank.spring.repository;

import com.sbank.spring.entity.RefreshToken;
import com.sbank.spring.mapping.ValueMapping;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RefreshTokenRepository extends JpaRepository<RefreshToken, String> {
    RefreshToken findByTokenKey(String tokenKey);
    ValueMapping findKeyByValue(String value);
}
