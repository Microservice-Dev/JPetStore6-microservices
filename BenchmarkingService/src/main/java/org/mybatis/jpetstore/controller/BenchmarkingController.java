package org.mybatis.jpetstore.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/")
public class BenchmarkingController {
    @GetMapping("/home")
    public String home() {
        return "Home";
    }
}
