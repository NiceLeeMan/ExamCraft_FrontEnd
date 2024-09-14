import React, { useState, ChangeEvent } from "react";
import BackgroundComponent from "../../component/BackgroundComponent";
import InputComponent from "../../component/InputCompponent";
import ButtonComponent from "../../component/ButtonComponent";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { LoginFormData } from "../../types/User";
import { handleInputChange } from "../../utils/state/useInputChange";
import { sendDataToServer } from "../../utils/api/authApi";

const Container = styled.div`
    width: 300px;
    height:20px;
    display: flex;
    justify-content: center;
    font-size : 15px;
    margin :  50px 0px 0px 0px;
    color: #999999;
     

`
const Separator = styled.span`
  margin: 0 40px;
  color: #cccccc;
  
`



const LoginPage : React.FC = () =>{

  const [loginData , setloginData] = useState<LoginFormData>({
    username : "",
    password : ""

  })

 

  const hanldeLoginSubmit = () =>{

    const apiUrl = 'http://localhost:8080/api/login'
    sendDataToServer(loginData , apiUrl)

  }
  
  const navigate = useNavigate();

  const goToRecoverUsername = () =>{
    navigate('/recoverUsername')
  }

  const goToRecoverPassword = () =>{
    navigate('/recoverPassword')
  }


    return(
        <BackgroundComponent>
          <InputComponent  
              label="아이디"
              type=""
              name="username"
              value={loginData.username}
              onChange={handleInputChange(setloginData)}
              placeholder="아이디를 입력하세요."
              margin="0px 0px 0px 0px"
           />
          <InputComponent
              label="비밀번호"
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleInputChange(setloginData)}
              margin="50px 0px 0px 0px"
              placeholder="비밀번호를 입력하세요."
            />


          <ButtonComponent 
            text="로그인" 
            margin="75px 0px 0px 0px"
            onClick={hanldeLoginSubmit}
          />

          <Container>
            <span
                style={{cursor : 'pointer'}} 
                onClick={goToRecoverUsername}
            >
            아이디 찾기
            </span>


            <Separator>|</Separator>
            <span 
                style={{cursor : 'pointer'}} 
                onClick={goToRecoverPassword}
            >
            비밀번호 찾기
            </span>

          </Container>
        </BackgroundComponent>


    );


}


export default LoginPage;