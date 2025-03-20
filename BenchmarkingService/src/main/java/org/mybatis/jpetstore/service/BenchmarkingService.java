package org.mybatis.jpetstore.service;

import org.mybatis.jpetstore.domain.Result;
import org.mybatis.jpetstore.http.HttpFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Random;

@Service
public class BenchmarkingService {
    @Autowired
    private HttpFacade httpFacade;
    private static String[] catalogIds = {"CAT", "DOGS", "BIRDS", "FISH", "REPTILES"};
    public Result selectProductList(int cnt) {
        long resp_time = 0;
        int success = 0;
        int fail = 0;
        Random rand = new Random();
        for (int i = 0; i < cnt; i++) {
            long start_time = System.currentTimeMillis();
            boolean resp = httpFacade.getProductList(catalogIds[rand.nextInt(5)]);
            if (resp) {
                success++;
                long end_time = System.currentTimeMillis();
                resp_time += (end_time - start_time);
            } else {
                fail++;
            }
        }

        Result result = new Result();
        result.setResult(resp_time / cnt, success, fail);

        return result;
    }
}
