
import API from "./common";

// auth services

const loginSewzeeAdminReq = (payload) => {
    return API.post("api/auth/adminLogin", payload);
}


const SewzeeService = {
    loginSewzeeAdminReq
}

export default SewzeeService;