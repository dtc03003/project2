package com.sbank.spring.repository;

import java.util.List;

import com.sbank.spring.entity.Event;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Long>{
    // List<Event> findAllByOrderByAgeAsc(); //나이로 정렬하여 모든 정보 조회
    List<Event> findAllBy();
}
