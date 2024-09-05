import React from "react";
import styled from "styled-components";
import ButtonComponent from "../../component/ButtonComponent";
import InputComponent from "../../component/InputCompponent";
import BackgroundComponent from "../../component/BackgroundComponent";

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
    return(
        <BackgroundComponent>
            <InputComponent label="아이디" type=""/>
            <InputComponent label="이메일" type="email"/>
            <SendButton>전송</SendButton>
            <InputComponent label="인증번호" type=""/>
            <InputComponent label="새 비밀번호" type="text"/>
            <ButtonComponent text="변경 완료" margin="60px 0 0 0 "/>
        </BackgroundComponent>
        
       
    )
    
    
}

export default RecoverPasswordPage;

