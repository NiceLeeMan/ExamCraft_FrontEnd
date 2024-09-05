import styled from "styled-components"
import React from "react";

const InputWrapper = styled.div<{ margin?: string }>`
    width: 300px;
    height: 80px;
    margin: ${({ margin }) => margin || "35px 0 0 0"};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    box-sizing: border-box;
  
`;

const Label = styled.label`
    width : 100%;
    height : 30px;
    font-size: 20px;
    color: #b0b0b0; /* 라벨의 텍스트 색상 */
    margin : 5px 0px 0px 0px;
    box-sizing: border-box;
`;

const InputField = styled.input`

    width : 100%;
    height : 35px;
    padding: 10px;
    border: 2px solid #ece2fc;
    border-radius: 15px;
    font-size: 16px;
    outline: none;

    box-sizing: border-box;


    &:focus {
        border-color: #a98eff; /* 포커스 시 보더 색상 */
    }

`

interface InputComponentProps extends React.InputHTMLAttributes<HTMLInputElement>{
    label : string;
    type : string;
    margin?: string;
 
   
}




const InputComponent : React.FC<InputComponentProps> = ({
    label,
    type = "text",
    margin,
    ...props
    }) =>{
    return(
        <InputWrapper margin={margin}>
        <Label>{label}</Label>
        <InputField type = {type} {...props}/>
        </InputWrapper>
      
    )

}


export default InputComponent