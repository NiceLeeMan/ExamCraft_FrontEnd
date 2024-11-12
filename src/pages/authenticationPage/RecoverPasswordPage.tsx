import React, { useState ,ChangeEvent } from "react";
import styled from "styled-components";
import ButtonComponent from "../../component/ButtonComponent";
import InputComponent from "../../component/InputCompponent";
import BackgroundComponent from "../../component/BackgroundComponent";
import { ResetPasswordFormData } from "../../types/User";
import { handleInputChange } from "../../utils/state/useInputChange";
import { sendDataToServer } from "../../utils/api/authApi";
import { handleRequestAuthCodeE } from "../../utils/api/emailService";


const SendButton = styled.button`
  position: absolute;
  right: 618px;
  top : 372px;
  background-color: #6f42c1;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    background-color: #5a32a3;
  }
`;



const RecoverPasswordPage : React.FC = () =>{


  const [resetPasswordData , setResetPasswordData] = useState<ResetPasswordFormData>({
    username : "",
    email : ""

  })

  const [newPassword, setNewPassword] = useState<string>("");

  const [code , setCode] = useState<string>("");

  const handleCodeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

 const handleNewPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };

  
  const handleRequestAuthCode = async () => {
    const endPoint = `http://localhost:8080/api/auth/request-auth-code`;
    handleRequestAuthCodeE(resetPasswordData,endPoint)
  };



  const handleResetPassword = async () => {
    const endPoint = `http://localhost:8080/api/auth/reset-password`;
    const resetData = {
      ...resetPasswordData,
      verificationCode: code,
      newPassword: newPassword,
    };

    try {
      await sendDataToServer(resetData, endPoint);
      alert("비밀번호가 재설정되었습니다.");
    } catch (error) {
      console.error("Error resetting password:", error);
      alert("비밀번호 재설정 중 오류가 발생했습니다.");
    }
  };


    return(
        <BackgroundComponent>
            <InputComponent
              label="아이디"
              type=""
              name="username"
              value={resetPasswordData.username}
              onChange={handleInputChange(setResetPasswordData)}
              />

            <InputComponent
              label="이메일"
              type="email"
              name="email"
              value={resetPasswordData.email}
              onChange={handleInputChange(setResetPasswordData)}
              
              />

            <SendButton onClick={handleRequestAuthCode}>전송</SendButton>

            <InputComponent
             label="인증번호"
             type="text"
             value={code}
             onChange={handleCodeChange}
             />

            <InputComponent 
              label="새 비밀번호"
              type="text"
              onChange={handleNewPasswordChange}
              />

            <ButtonComponent
              text="변경 완료"
              margin="60px 0 0 0 "
              onClick={handleResetPassword}
              />
        </BackgroundComponent>
        
       
    )
    
    
}

export default RecoverPasswordPage;

