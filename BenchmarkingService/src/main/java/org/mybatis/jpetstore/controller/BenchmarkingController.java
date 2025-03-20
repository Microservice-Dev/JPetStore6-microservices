package org.mybatis.jpetstore.controller;

import org.mybatis.jpetstore.domain.Result;
import org.mybatis.jpetstore.service.BenchmarkingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/")
public class BenchmarkingController {
    @Autowired
    private BenchmarkingService benchmarkingService;

    @GetMapping("/")
    public String home() {
        return "Home";
    }

    @GetMapping("/selectProductList")
    public ModelAndView selectProductList(@RequestParam int cnt) {
        ModelAndView mav = new ModelAndView();
        Result result = benchmarkingService.selectProductList(cnt);

        System.out.println("평균 응답 시간: " + result.getResp_time() + "ms");

        mav.setViewName("Home");
        mav.addObject("result", result);
        return mav;
    }
}
