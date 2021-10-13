import './chat.css'
import React ,{useState} from 'react'
import {MoreVert, SearchOutlined,AttachFile, InsertEmoticon, Mic, Send} from '@material-ui/icons'
import { Avatar, IconButton } from '@material-ui/core';
import axios from '../../axios'

const Chat = ({messages}) => {
   const [input,setInput]=useState("");
   const sendMessage=async (e)=>{
       e.preventDefault();
     await  axios.post('/messages/new',{
           message:input,
           name:"Shubhi",
           received:Math.random() < 0.5
       });
       setInput("");
   }


    return (
        <div className='chat'>
            <div className='chat_header'>
                <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW6X2lldt_gy2tcbXCKBbKWNVBpH-f1Mcjsw&usqp=CAU' className='chat_Avatar'/>
                <div className='chat_headerInfo'>
                   <h3>Shubhi</h3>
                   <p>Last seen at {(new Date()).toLocaleString()}</p>
                </div>
                <div className='chat_headerRight'>
                <IconButton >
                   <SearchOutlined />
               </IconButton>
               <IconButton >
                   <AttachFile />
               </IconButton>
               <IconButton >
                   <MoreVert />
                   </IconButton> 
                </div>
            </div>
            <div className='chat_body'>
                {
                    messages.map((message)=>(
                        <p className={`chat_message ${message.received && "chat_receiver"}`}>
                        <span className='chat_name'>{message.name}</span>
                        {message.message}
                        <span className='chat_timestamp'>{new Date().toLocaleTimeString()}</span>
                    </p>
                    ))
                }

        </div>
            <div className='chat__footer'>
                <IconButton>
                <InsertEmoticon />
                </IconButton>        
           <form className='chat__input'>
               <input value={input} placeholder='Type your message here' type='text' onChange={e=>setInput(e.target.value)}/>          
           {/* <button onClick={handleInput} type='submit'>
                    Send
           </button> */}
           <IconButton onClick={sendMessage} type='submit'>
              <Send />
           </IconButton>
           </form>
           <IconButton >
              <Mic />
           </IconButton>
          
        </div>
        </div>
    )
}

export default Chat
