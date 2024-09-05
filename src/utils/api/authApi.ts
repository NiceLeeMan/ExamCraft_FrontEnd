import axios from "axios";

export const sendDataToServer = async<T> (data: T , endPoint : string) : Promise<void>=>{

    try{
        const response = await axios.post(endPoint,data)
        console.log('Data sent successfully:', response.data);
    }

    catch(error){
        if (axios.isAxiosError(error)) {
           
            console.error('Error sending data:', error.response?.data || error.message);
        } else {
            // 기타 오류 처리
            console.error('Unexpected error:', error);
        }
    }

}