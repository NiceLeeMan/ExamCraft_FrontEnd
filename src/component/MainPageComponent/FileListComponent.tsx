import React, { useState } from 'react';
import styled from 'styled-components';

// 기존 코드와 동일한 스타일 컴포넌트 설정
const Background = styled.div<{ isOpen: boolean }>`
  width: 400px;
  height: 100%;
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-400px')};
  background-color: #f8f8f8;
  border-left: 1px solid #ddd;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: right 0.3s ease;
`;
const OpenButton = styled.button`
  position: fixed;
  top: 10px;
  right: 10px;
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const TopButtons = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const SmallButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: #ccc;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;

  &:hover {
    background-color: #aaa;
  }
`;

// 추가된 로딩 표시 텍스트 스타일
const LoadingText = styled.p`
  color: #888;
  font-size: 14px;
`;

// 리스트 스타일 설정
const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  width: 100%;
`;

// 리스트 항목 스타일
const ListItem = styled.li`
  padding: 10px;
  margin: 5px 0;
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

const FileListComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // 기존 파일 리스트
  const files = [
    { name: "File1.pdf", path: "/path/to/File1.pdf" },
    { name: "File2.pdf", path: "/path/to/File2.pdf" },
    { name: "File3.pdf", path: "/path/to/File3.pdf" }
  ];

  const togglePanel = () => setIsOpen(!isOpen);

  // 파일 선택 및 서버로 전송하는 함수
  const handleFileUpload = async () => {
    try {
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = '*'; // 필요에 따라 파일 타입 제한 가능
      fileInput.onchange = async (e: Event) => {
        const target = e.target as HTMLInputElement;
        if (target.files && target.files[0]) {
          const file = target.files[0];

          // 로딩 시작
          setIsLoading(true);

          // 파일 서버 업로드 (FormData로 전송)
          const formData = new FormData();
          formData.append('file', file);

          // 서버에 파일 전송
          const response = await fetch('/upload', {
            method: 'POST',
            body: formData,
          });

          if (response.ok) {
            console.log("파일이 성공적으로 서버에 전송되었습니다.");
          } else {
            console.error("파일 전송에 실패했습니다.");
          }

          // 로딩 끝
          setIsLoading(false);
        }
      };
      fileInput.click();
    } catch (error) {
      console.error("파일 업로드 중 오류 발생:", error);
      setIsLoading(false);
    }
  };

  return (
    <>
      {!isOpen && <OpenButton onClick={togglePanel}>열기</OpenButton>}

      <Background isOpen={isOpen}>
        <TopButtons>
          <SmallButton onClick={togglePanel}>X</SmallButton>
          <SmallButton onClick={handleFileUpload}>+</SmallButton>
          <SmallButton>검색버튼</SmallButton>
          <SmallButton>정렬버튼</SmallButton>
        </TopButtons>

        {/* 로딩 중 표시 */}
        {isLoading && <LoadingText>파일 업로드 중...</LoadingText>}

        {/* 기존 파일 리스트 */}
        <List>
          {files.map((file, index) => (
            <ListItem key={index} onClick={() => window.open(file.path, '_blank')}>
              {file.name}
            </ListItem>
          ))}
        </List>
      </Background>
    </>
  );
};

export default FileListComponent;
