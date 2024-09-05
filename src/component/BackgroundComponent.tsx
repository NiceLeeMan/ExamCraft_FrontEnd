import React, { ReactNode } from "react";
import styled from "styled-components";

const Page = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #D3C1FF; /* 연한 보라색 배경 */
 
`;

const Board = styled.div`
  width: 450px;
  height : 700px;
  background-color : white;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5); 
  border-radius : 20px;
  padding : 100px 0px 0px 0px;
  margin: 0px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;

  

`;

interface BackgroundComponentProps{
  children: ReactNode;
  
}


const BackgroundComponent : React.FC<BackgroundComponentProps> = ( {children} ) =>{
    return(
        <Page>
          <Board>
          {children}
          </Board>
        </Page>
       
    )
    
    
}

export default BackgroundComponent;