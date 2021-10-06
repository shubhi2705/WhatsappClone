import React from 'react';
import {Chat, DonutLarge, MoreVert, SearchOutlined} from '@material-ui/icons'
import { Avatar, IconButton } from '@material-ui/core';
import './sidebar.css'
import { SidebarChat } from '../sidebarChat/SidebarChat';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar_header'>
                <Avatar className='sidebar_avatar'/>
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
             <SidebarChat />
             <SidebarChat />
             <SidebarChat />
             <SidebarChat />
             <SidebarChat />
             <SidebarChat />
             <SidebarChat />
             <SidebarChat />
             <SidebarChat />
           </div>
       
        </div>
    )
}

export default Sidebar
