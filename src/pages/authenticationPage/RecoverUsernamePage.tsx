import React, { ChangeEvent, useState } from "react";
import InputComponent from "../../component/InputCompponent";
import ButtonComponent from "../../component/ButtonComponent";
import BackgroundComponent from "../../component/BackgroundComponent";
import { sendDataToServer } from "../../utils/api/authApi";
import { FindUserIdFormData } from "../../types/User";
import { handleInputChange } from "../../utils/state/useInputChange";



const RecoverUsernamePage:React.FC = () =>{

    const [findUserIdData, setFindUserIdData] = useState<FindUserIdFormData>({
        email : ""
    })


    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        handleInputChange(e, findUserIdData, setFindUserIdData);
        console.log(findUserIdData)
    };
    

    const handleEmailSubmit = async () =>{

        const email = findUserIdData.email
        if(email ===""){
            alert("email을 입력하시오")

        }

        else{

            const apiUrl = "http://localhost:8080/api/auth/find-username"

            try{
                await sendDataToServer(findUserIdData, apiUrl)
                alert("아이디를 전송하였습니다")
            }

            catch(error){
                console.error("아이디전송과정에서 오류 발생:", error);
            }

        }

    }




    return(
        <BackgroundComponent>
            <InputComponent
                label="이메일"
                type="email"
                name="email"
                value={findUserIdData.email}
                onChange={handleEmailChange}
                margin="0 0 0 0"
                />


            <ButtonComponent
                text="전송" 
                margin="60px 0 0 0"
                onClick={handleEmailSubmit}/>
        </BackgroundComponent>
        
    )




}


export default RecoverUsernamePage