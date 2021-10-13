import { Avatar } from '@material-ui/core'
import React,{useState,useEffect} from 'react'
import './SidebarChat.css';
import axios from '../../axios';
export const SidebarChat = ({room,addNewChat}) => {
    console.log("Inside sidebar chat",room)
    const [seed,setSeed]=useState('');
    const[roomName,setRoomName]=useState('');
    const number=Math.random();
    useEffect(()=>{
       setSeed(Math.floor((Math.random() * 5000)));
    },[])

    const createChat=async ()=>{
const roomName=prompt("Please enter your name");
if(roomName)
{ setRoomName(roomName);
   await axios.post('/chatroom/new',{
        name:roomName,
        message:"Hi"
    })
}

    }
    return (
        !addNewChat?(
         <div className='sidebar_chats'>
           <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} className='sidebar__Avatar'/>
           <div className='sidebar_chatInfo'>
               <h2>{room.name}</h2>
               <p>{room.message}</p>
           </div>
        </div>
        ):(
            <div className='sidebar_chats' onClick={createChat}>
                <h2>Add New Chat</h2>
            </div>
        )
    

    )
}
