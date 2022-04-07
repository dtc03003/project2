package com.sbank.spring.service;

import java.util.List;

import javax.transaction.Transactional;

import com.sbank.spring.dto.EventDto;
import com.sbank.spring.entity.Event;
import com.sbank.spring.repository.EventRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class EventService {

    @Autowired
    private final EventRepository eventRepository;

    @Transactional
    public List<Event> eventRecord(EventDto eventDto) {
        eventRepository.save(EventDto.toEntity(eventDto));
        return eventRepository.findAllBy();
    }
    
}
