package com.sbank.spring.mapping;

//회원번호(pk)만 가져오기 위한 mapping 인터페이스(엔티티는 무조건 하나이므로 일부분 컬럼만 가져오고 싶을 경우 interface 사용)
public interface NoMapping {
    Long getNo();
}
