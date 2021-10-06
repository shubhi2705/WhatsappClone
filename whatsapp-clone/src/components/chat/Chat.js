import './chat.css'
import React from 'react'
import {MoreVert, SearchOutlined,AttachFile, InsertEmoticon, Mic, Send} from '@material-ui/icons'
import { Avatar, IconButton } from '@material-ui/core';
const Chat = () => {
    return (
        <div className='chat'>
            <div className='chat_header'>
                <Avatar />
                <div className='chat_headerInfo'>
                   <h3>Shubhi</h3>
                   <p>Last seen at</p>
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
            <p className='chat_message'>
                <span className='chat_name'>Shubhi</span>
                This is message
                <span className='chat_timestamp'>{new Date().toUTCString()}</span>
            </p>
            <p className='chat_message chat_receiver'>
                <span className='chat_name'>Shubhi</span>
                This is message
                <span className='chat_timestamp'>{new Date().toUTCString()}</span>
            </p>
            <p className='chat_message'>
                <span className='chat_name'>Shubhi</span>
                This is message
                <span className='chat_timestamp'>{new Date().toUTCString()}</span>
            </p>
            <p className='chat_message chat_receiver'>
                <span className='chat_name'>Shubhi</span>
                This is message
                <span className='chat_timestamp'>{new Date().toUTCString()}</span>
            </p>
            <p className='chat_message'>
                <span className='chat_name'>Shubhi</span>
                This is message
                <span className='chat_timestamp'>{new Date().toUTCString()}</span>
            </p>
            <p className='chat_message chat_receiver'>
                <span className='chat_name'>Shubhi</span>
                This is message
                <span className='chat_timestamp'>{new Date().toUTCString()}</span>
            </p>
            <p className='chat_message'>
                <span className='chat_name'>Shubhi</span>
                This is message
                <span className='chat_timestamp'>{new Date().toUTCString()}</span>
            </p>
            <p className='chat_message chat_receiver'>
                <span className='chat_name'>Shubhi</span>
                This is message
                <span className='chat_timestamp'>{new Date().toUTCString()}</span>
            </p>
        </div>
            <div className='chat__footer'>
                <IconButton>
                <InsertEmoticon />
                </IconButton>        
           <form className='chat__input'>
               <input />
               <button>
                   <IconButton >
                   <Send />
                 </IconButton>
             </button>
           </form>
           <IconButton >
           <Mic />
                 </IconButton>
          
        </div>
        </div>
    )
}

export default Chat
