package com.sbank.spring.repository;

import java.util.List;
import java.util.Optional;

import com.sbank.spring.entity.Member;
import com.sbank.spring.mapping.NameMapping;
import com.sbank.spring.mapping.NoMapping;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long>{
    Optional<Member> findByEmail(String email);
    Optional<Member> findById(String id);
    boolean existsByEmail(String email); //이메일 중복검사
    boolean existsById(String id); //아이디 중복검사
    Member findById(Optional<String> id); //회원정보조회
    NameMapping findByNo(Long no); //회원번호로 사용자 이름 조회
    List<NoMapping> findByName(String name); //사용자 이름으로 회원번호 조회
}
