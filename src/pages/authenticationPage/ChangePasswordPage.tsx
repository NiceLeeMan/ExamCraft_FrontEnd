import React from "react";
import BackgroundComponent from "../../component/BackgroundComponent";
import InputComponent from "../../component/InputCompponent";
import ButtonComponent from "../../component/ButtonComponent";





const ChangePasswordPage: React.FC = () =>{

    





    return(

        <BackgroundComponent>
            <InputComponent
                label="비밀번호"
                type="text"/>
                
            <InputComponent 
                label="신규 비밀번호"
                type="text"/>

            <InputComponent 
                label="비밀번호 재입력"
                type="password"/>

            <ButtonComponent
                text="변경 완료"
                margin="60px 0 0 0"
                
                
                />

        </BackgroundComponent>
    )




    
}

export default ChangePasswordPage;