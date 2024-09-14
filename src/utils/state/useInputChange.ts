import { Dispatch, SetStateAction, ChangeEvent } from "react";




export const handleInputChange = <T extends Record<string, any>>(
    setState: Dispatch<SetStateAction<T>>
  ) => (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // 상태 업데이트 로직

    setState((prevState) => {
      console.log("prevState : "+prevState);
      if (name in prevState) {
        return { ...prevState, [name]: value };
      }
      return prevState;
    });

  };
  


