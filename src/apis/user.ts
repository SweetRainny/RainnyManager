import request from "@/utils/request"

export function login(data: any) {
    return request({
        url: "/api/login/",
        method: "post",
        data
    })
}