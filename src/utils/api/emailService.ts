import { sendDataToServer } from "./authApi";





export const handleRequestAuthCodeE = async<T> (
    data : T,
    endPoint :string
) => {
    
    try {
      await sendDataToServer(data, endPoint);
      alert("인증번호가 이메일로 전송되었습니다.");
    } catch (error) {
      console.error("Error requesting auth code:", error);
      alert("인증번호 요청 중 오류가 발생했습니다.");
    }
  };
