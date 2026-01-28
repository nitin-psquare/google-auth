import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    const navigate = useNavigate()

    const loginSuccess  = async(credentialsResponse:any)=>{

        try {
            const res = await axios.post("http://localhost:3000/api/v1/user/auth",{
               token: credentialsResponse.credential
            })

            console.log(credentialsResponse)

            if(res.data.token){
                localStorage.setItem("token",res.data.token)
                navigate("/profile")
            }
        } catch (error) {
            console.log("err",error)
        }
        
    }

    return (
        <GoogleLogin onSuccess={loginSuccess} />
    )

}

export default Login;