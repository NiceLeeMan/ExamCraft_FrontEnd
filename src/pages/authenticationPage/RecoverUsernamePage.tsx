import React from "react";
import InputComponent from "../../component/InputCompponent";
import ButtonComponent from "../../component/ButtonComponent";
import BackgroundComponent from "../../component/BackgroundComponent";




const RecoverUsernamePage:React.FC = () =>{
    return(
        <BackgroundComponent>
            <InputComponent label="이메일" type="email" margin="0 0 0 0"/>
            <ButtonComponent text="전송" margin="60px 0 0 0"/>
        </BackgroundComponent>
        
        
    

    )




}


export default RecoverUsernamePage