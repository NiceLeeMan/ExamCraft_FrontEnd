



export const validateUsername = (username: string): string => {
    return username.trim().length >= 6 ? "" : "아이디는 최소 6자 이상이어야 합니다.";
};


export const validatePassword = (password: string): boolean => {
    // 비밀번호는 최소 8자, 하나 이상의 대문자, 소문자, 숫자 및 특수 문자를 포함
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
};

//회원가입 , 인증번호 받을 때 공통으로 적용 가능
export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};



