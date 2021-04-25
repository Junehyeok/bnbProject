import axios from "axios";
import { UserType } from "../../types/user";

//* 회원가입 body
//사용자 인증에 관련된 api를 모아둔다.

interface SignUpAPIBody {
    email: string;
    firstname: string;
    lastname: string;
    password: string;
    birthday: string;
}

//* 회원가입 api
export const signupAPI = (body: SignUpAPIBody) =>
axios.post<UserType>("/api/auth/signup", body);
