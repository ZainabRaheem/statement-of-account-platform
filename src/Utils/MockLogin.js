import { AxiosError } from "axios"

const MockLogin = (data) => {
    if(data.userName !== 'BossMan'){
        throw new Error("User not found")
    }
    else if(data.password !== "123456"){
        throw new Error("Password is Incorrect")
    }
    else {
        return {token: "djbdnsdksd", user:"BossMan"}
    }
}

export default MockLogin;