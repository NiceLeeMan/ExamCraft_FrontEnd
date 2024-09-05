import { Dispatch, SetStateAction } from "react";




// 값의 상태를 업데이트 해주는 함수
export const updateUserState = <T>(
    name: keyof T, 
    value: any,
    setState : Dispatch<SetStateAction<T>>

) => {
    setState((prevState) => ({
        ...prevState,
        [name]: value,
    }));
};

