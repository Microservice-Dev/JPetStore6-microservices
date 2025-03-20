package org.mybatis.jpetstore.http;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.Map;
import java.util.stream.Collectors;


@Component
public class HttpFacade {
    @Autowired
    RestTemplate restTemplate;

    private static final String CATALOG_SERVICE_URL = "http://localhost:8080/catalog";

    public boolean getProductList(String catalogId){
        String url = CATALOG_SERVICE_URL + "/get/productList?catalogId=" + catalogId;
        try {
            ResponseEntity<String> responseEntity = restTemplate.postForEntity(url, null, String.class);
            return true;
        } catch (Exception e) {
            // 요청에 실패 응답을 받는 경우
            return false;
        }
    }
}
