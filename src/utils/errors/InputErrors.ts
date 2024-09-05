// src/utils/errors/handleErrors.ts

import { validateEmail, validatePassword, validateUsername } from "../validation";
import { RegistrationFormData } from "../../types/User";


export const getUsernameError = (user : RegistrationFormData) : string  =>{

    const { username } = user
    const usernameError = validateUsername(username);

    return usernameError;
    
}
export const getPasswordError = (user :RegistrationFormData) : string  =>{

    const { password } = user
    const passwordError = validatePassword(password)

    return !passwordError ? "비밀번호는 최소 8자, 하나 이상의 대문자, 소문자, 숫자 및 특수 문자를 포함해야 합니다." : ""
    
}

export const getEmailError = (user : RegistrationFormData) : string  =>{

    const { email } = user
    const emailError = validateEmail(email)

    return !emailError ? "유효한 이메일 주소를 입력해 주세요." : ""
    
}




