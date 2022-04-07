package com.sbank.spring.dto;

import com.sbank.spring.entity.Event;

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
public class EventDto {
    
    private String nickname;

    private int age;

    public static Event toEntity(EventDto eventDto) {
        return Event.builder()
                .nickname(eventDto.getNickname())
                .age(eventDto.getAge())
                    .build();
    }
}
