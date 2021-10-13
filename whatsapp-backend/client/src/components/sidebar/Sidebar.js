import React from 'react';
import {Chat, DonutLarge, MoreVert, SearchOutlined} from '@material-ui/icons'
import { Avatar, IconButton } from '@material-ui/core';
import './sidebar.css'
import { SidebarChat } from '../sidebarChat/SidebarChat';

const Sidebar = ({rooms}) => {

    return (
        <div className='sidebar'>
            <div className='sidebar_header'>
                <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW6X2lldt_gy2tcbXCKBbKWNVBpH-f1Mcjsw&usqp=CAU' className='sidebar_avatar' id="sidebarAvatar"
                />
               <div className='sidebar_headerRight'>
               <IconButton >
                   <DonutLarge />
               </IconButton>
               <IconButton >
                   <Chat />
               </IconButton>
               <IconButton >
                   <MoreVert />
               </IconButton>
               </div>
               <div className='sidebar_headerLeft'>
               </div>
            </div>        
            <div className='sidebar_search'>
                <div className='sidebar_searchContainer'>
                    <SearchOutlined />
                    <input type='text' placeholder='Type your message here..'/>
                </div>

            </div>
           <div className='sidebar_chat'>
               <SidebarChat addNewChat />
               {rooms.map((room,i)=>(
                   <SidebarChat room={room} key={i} />
               ))}
               
           </div>
       
        </div>
    )
}

export default Sidebar
