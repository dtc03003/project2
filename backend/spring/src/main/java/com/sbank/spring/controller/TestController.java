package com.sbank.spring.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class TestController {

    @GetMapping("/hello1")
    public String hello1() {
        return "hello";
    }

    @GetMapping("/hello2")
    public String hello2(@RequestParam String param) {
        return param;
    }

    @GetMapping("/test1")
    public String test1() {
        return "test";
    }
}
