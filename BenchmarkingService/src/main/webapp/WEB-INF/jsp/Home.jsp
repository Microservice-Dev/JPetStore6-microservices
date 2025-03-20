<%--
  Created by IntelliJ IDEA.
  User: sh
  Date: 3/21/25
  Time: 12:13 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
</head>
<body>
    <h2>상품목록조회 벤치마킹</h2>
    <form action="/benchmarking/selectProductList">
        <table>
            <tr>
                <td>조회 횟수: <input type="number" name="cnt">
                    <input type="submit" value="요청"> </td>
            </tr>
            <tr>
                <td>평균 응답 시간: ${result.resp_time}ms</td>
            </tr>
            <tr>
                <td>응답 성공: ${result.success}</td>
            </tr>
            <tr>
                <td>응답 실패: ${result.fail}</td>
            </tr>
        </table>
    </form>
</body>
</html>
