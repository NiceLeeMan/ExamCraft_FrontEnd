

// 로그인 페이지: 아이디와 비밀번호가 필요
export interface LoginFormData {
    username: string;
    password: string;
}

// 회원가입 페이지: 아이디, 비밀번호, 이메일이 필요
export interface signUpFormData {
    username: string;
    password: string;
    email: string;
}

// 아이디 찾기 페이지: 이메일만 필요
export interface RecoverUsernameFormData {
    email: string;
}

// 비밀번호 찾기 페이지: 아이디와 이메일이 필요
export interface ResetPasswordFormData {
    username: string;
    email: string;
}


