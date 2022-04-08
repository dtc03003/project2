package com.sbank.spring.controller;

import java.util.List;

import com.sbank.spring.dto.EventDto;
import com.sbank.spring.entity.Event;
import com.sbank.spring.service.EventService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "EventController", description = "Event API")
@CrossOrigin(value = "*")
@RestController
@RequestMapping("/api/event")
@RequiredArgsConstructor
public class EventController {
    
    private final EventService eventService;

    @Operation(summary="정보 저장 및 이벤트 순위 조회")
    @PostMapping("/record")
    public ResponseEntity<List<Event>> eventRecord(@RequestBody EventDto eventDto) {
        return ResponseEntity.ok(eventService.eventRecord(eventDto));
    }
}
