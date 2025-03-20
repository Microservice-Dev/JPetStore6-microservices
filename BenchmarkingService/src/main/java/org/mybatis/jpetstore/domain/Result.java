package org.mybatis.jpetstore.domain;

public class Result {
    private long resp_time;
    private int success;
    private int fail;

    public Result() {
        this.resp_time = 0;
        this.success = 0;
        this.fail = 0;
    }

    public void setResult(long resp_time, int success, int fail) {
        this.resp_time = resp_time;
        this.success = success;
        this.fail = fail;
    }

    public long getResp_time() {
        return resp_time;
    }

    public int getFail() {
        return fail;
    }

    public int getSuccess() {
        return success;
    }
}
