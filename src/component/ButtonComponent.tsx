import React from "react";
import styled from "styled-components";




const Button = styled.button<{ margin?: string }>`
    width : 300px;
    height : 40px;
    margin: ${({ margin }) => margin || "0 0 0 0"};
    border-radius : 25px;
    display : flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    color: white;
    border: none;
    background-color : #8069BF;
   
     &:hover {
        background-color: #9a85e0; /* 마우스 오버 시 색상 */
    }
 
   
   

`
interface ButtonComponentProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    text : string;
    margin?: string
}



const ButtonComponent: React.FC<ButtonComponentProps> =  ({text , margin, ...props}) => {
    return(
        <Button margin={margin} {...props}>
            {text}
        </Button>
      
    );
}

export default ButtonComponent;