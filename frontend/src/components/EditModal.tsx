import axios from "axios";
import { useState } from "react";


const EditModal = ({ isOpen, onClose }:any) => {
  if (!isOpen) return null;
  
  const[name,setName] = useState("")
  const[email,setEmail] = useState("")

  const handleSubmit = async() =>{
    const token = localStorage.getItem("token")

    if(!token){
        return;
    }
    const res  = await axios.put("http://localhost:3000/api/v1/user/profile",{name,email},{
         headers:{
            Authorization:`Bearer ${token}`
        },
    })

    console.log(res)


  }

  return (
    <div  onClick={onClose}>
      <div onClick={e => e.stopPropagation()}>
            <button style={{
                margin:"4px"
            }} onClick={onClose}>
            &times;
            </button>
            <br></br>

            <input
                style={{
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                marginRight: '10px',
                fontSize: '16px' 
                }}
            
                onChange={(e)=>{
                    setName(e.target.value)
                }} 
                placeholder="name"
            />

            <input
                style={{
                padding: '10px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                marginRight: '10px',
                fontSize: '16px' 
                }}
        
                onChange={(e)=>{
                    setEmail(e.target.value)
                }} 
                placeholder="email"
            />

            <br></br>

            <button style={{
                marginTop:"4px"
            }} onClick={handleSubmit}>submit</button>

        </div>
    </div>
  );
};

export default EditModal;
