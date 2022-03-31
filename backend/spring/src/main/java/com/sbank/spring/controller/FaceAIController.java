package com.sbank.spring.controller;

import java.io.IOException;

import com.sbank.spring.dto.ImageDto;
import com.sbank.spring.service.FaceAIService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@Tag(name = "FaceAIController", description = "얼굴 인식 API")
@CrossOrigin(value = "*")
@RestController
@RequestMapping("/api/ai")
@RequiredArgsConstructor
public class FaceAIController {

    private final FaceAIService faceAIService;

    @Operation(summary="Naver Clovar CFR API 활용한 얼굴 인식", description = "return 받은 나이 평균값으로 리턴 -> 추후 변경될수도")
    @PostMapping("/recognize/face")
    public ResponseEntity<Integer> recognizeFace(@RequestBody ImageDto image) throws IOException {
        return ResponseEntity.ok(faceAIService.recognizeFace(image));
    }
    
}
