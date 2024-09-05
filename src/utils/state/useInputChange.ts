import { Dispatch, SetStateAction, ChangeEvent } from "react";
import { updateUserState } from "./useUpdateState";






export const handleInputChange = <T extends Record<string , any>>(
    e: ChangeEvent<HTMLInputElement>,
    state : T,
    setState : Dispatch<SetStateAction<T>>
    ) => {
    console.log(e.target)
    const { name, value } = e.target;
    console.log(e.target)

    // name을 keyof User로 타입 캐스팅하여 안전하게 처리
    if (name in state) {
        updateUserState(name as keyof T , value, setState);
    }
};
