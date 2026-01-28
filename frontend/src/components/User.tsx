import { useState } from "react"
import EditModal from "./EditModal"

export interface UserData{
    id?:string
    name?:string
    profilePic?:string
    email?:string
}

const User = ({name,profilePic,email}:UserData) =>{

const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false)


    return <div style={{ border: '2px solid #ccc', padding: '16px', borderRadius: '8px',display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ marginBottom: '12px' }}>
            <div >
                {name}
            </div>
            <div >
                {email}
            </div>
        </div>
        <img
            src={profilePic}
            style={{ width: '80px', height: '80px', borderRadius: '50%', marginBottom: '12px' }}
        />
        <button
            style={{
            padding: '10px 20px',
            fontSize: '14px',
            backgroundColor: '#007BFF',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            marginTop:"5px",
            cursor: 'pointer',
            fontWeight: 'bold'
            }}
            onClick={openModal}
        >
            Edit Profile
        </button>


        <EditModal isOpen={isModalOpen} onClose={closeModal} />
          

    </div>  
     

}

export default User;


