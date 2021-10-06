import { Avatar } from '@material-ui/core'
import React from 'react'
import './SidebarChat.css'
export const SidebarChat = () => {
    return (
        <div className='sidebar_chats'>
           <Avatar />
           <div className='sidebar_chatInfo'>
               <h2>Shubhi</h2>
               <p>This is chatbox</p>
           </div>
        </div>
    )
}
