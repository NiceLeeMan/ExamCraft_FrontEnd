

import ChangePasswordPage from "./pages/authenticationPage/ChangePasswordPage"
import LoginPage from "./pages/authenticationPage/LoginPage"
import RecoverPasswordPage from "./pages/authenticationPage/RecoverPasswordPage"
import SignUpPage from "./pages/authenticationPage/SignUpPage"
import MainPage from "./pages/mainPage/mainPage"
import RecoverUsernamePage from "./pages/authenticationPage/RecoverUsernamePage"
import { BrowserRouter ,Route, Routes } from "react-router-dom"



const App: React.FC = () => {
 

  return (
   <BrowserRouter>
    <Routes>
      <Route path ="/login" element ={<LoginPage/>}/> 
      <Route path ="/signUp" element ={<SignUpPage/>}/>
      <Route path ="/recoverUsername" element ={<RecoverUsernamePage/>}/>
      <Route path ="/recoverPassword" element ={<RecoverPasswordPage/>}/>
      <Route path ="/changePassword" element ={<ChangePasswordPage/>}/>
      <Route path="/mainPage" element={<MainPage/>}/>
      
    </Routes>
   </BrowserRouter>
  
 
  )
}

export default App
