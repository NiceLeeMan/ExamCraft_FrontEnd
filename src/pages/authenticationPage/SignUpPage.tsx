import React, { ChangeEvent, useState } from "react";
import ButtonComponent from "../../component/ButtonComponent";
import InputComponent from "../../component/InputCompponent";
import BackgroundComponent from "../../component/BackgroundComponent";
import {signUpFormData} from "../../types/User";
import { validateEmail,validatePassword, validateUsername } from "../../utils/validation";
import { handleInputChange } from "../../utils/state/useInputChange";
import styled from "styled-components";
import { sendDataToServer } from "../../utils/api/authApi";


const SendButton = styled.div`
    width: 40px;
    height: 20px;
    color: white;
    border: none;
    background-color : #8069BF;

    &:hover {
        background-color: #9a85e0; /* 마우스 오버 시 색상 */
    }

`

const SignUpPage : React.FC = () =>{

    const [signUpData, setsignUpData] = useState<signUpFormData>({
            username : "",
            password : "",
            email : "",
    })

    const [authCode , setAuthCode] = useState<string>("");



    const handleCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
        setAuthCode(e.target.value);
    };
   
    
    const handleErrorMessage = () : string =>{

        const {username, password , email} = signUpData

        const usernameError = validateUsername(username);
        const isPasswordValid = validatePassword(password);
        const isEmailValid = validateEmail(email);

        let errorMessage = "";

        if (usernameError) {
            errorMessage = usernameError;
           
        } else if (!isPasswordValid) {
            errorMessage = "비밀번호는 최소 8자, 하나 이상의 대문자, 소문자, 숫자 및 특수 문자를 포함해야 합니다.";

        } else if (!isEmailValid) {
            errorMessage = "유효한 이메일 주소를 입력해 주세요.";
        }
        console.log(signUpData)

        return errorMessage
        
    }


    const handleSignUpSubmit = async () =>{
        
        const errorMessage = handleErrorMessage()

        if(errorMessage === ""){
            
          if(authCode){

            const endPoint = `http://localhost:8080/api/signup/complete?code=${encodeURIComponent(authCode)}`

            try{
                await sendDataToServer(signUpData, endPoint)
                alert("회원가입이 완료되었습니다.")
                
            }
            catch(error){
                console.error("회원가입 과정에서 오류 발생:", error);
                alert("회원가입 중 오류가 발생했습니다. 다시 시도해주세요.");
            }
          }
          else{
            alert("인증 코드를 입력하지 않았습니다.");
          }
           
        }else{
            alert(errorMessage)
        }

    }
    //인증번호 올바르게 입력하면 -> 회원가입 성공시키는 로직 진행 ㄱ
   
    const sendAuthCodeToEmail = async () =>{
        const apiUrl = "http://localhost:8080/api/signup/send"
        sendDataToServer(signUpData, apiUrl)
    }
        

    return(
        <BackgroundComponent>
            
            <InputComponent
                label="아이디"
                type=""
                name="username"
                value={signUpData.username}
                onChange={handleInputChange(setsignUpData)}
                placeholder="아이디를 입력하세요."
                />
            <InputComponent
                 label="비밀번호" 
                 type="password"
                 name="password"
                 value={signUpData.password}
                 onChange={handleInputChange(setsignUpData)}
                 placeholder="비밀번호를 입력하세요."
                 />

            <InputComponent
                label="이메일" 
                type="email"
                name="email"
                value={signUpData.email}
                onChange={handleInputChange(setsignUpData)}
                placeholder="이메일을 입력하세요."
             />
            <InputComponent 
                label="인증번호"
                type="text"
                value={authCode}
                onChange={handleCodeChange}/>

            <ButtonComponent 
                text="회원가입" 
                margin="50px 0 0 0"
                onClick={handleSignUpSubmit}/>

                <SendButton onClick={sendAuthCodeToEmail}>전송</SendButton>
        </BackgroundComponent>
        
       
    )
    
}   


export default SignUpPage;

