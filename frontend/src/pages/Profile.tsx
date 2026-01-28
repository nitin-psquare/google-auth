import axios from "axios";
import { useEffect, useState } from "react";
import User, { type UserData } from "../components/User";



const Profile = () =>{

    const[user,setUser] = useState<UserData>()

    useEffect(()=>{
        const fetchData = async()=>{
            const token = localStorage.getItem("token")
            if(!token){
                return;
            }

            try {
                const res = await axios.get("http://localhost:3000/api/v1/user/profile",{
                    headers:{
                        Authorization:`Bearer ${token}`
                    }
                })
                setUser(res.data.user)
                console.log(user)
            } catch (error) {
                
            }
        }
        fetchData()
    },[])

    return (
        <User name={user?.name} profilePic={user?.profilePic} email={user?.email}  />
    )

}

export default Profile;


