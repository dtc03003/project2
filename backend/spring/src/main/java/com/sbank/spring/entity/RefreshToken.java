package com.sbank.spring.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name ="refresh_token")
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Builder
public class RefreshToken {
    @Id
    @Column
    private String tokenKey;
    @Column
    private String value;

    public RefreshToken updateValue(String token) {
        this.value = token;
        return this;
    }
}

