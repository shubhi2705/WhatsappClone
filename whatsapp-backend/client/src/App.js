
import './App.css';
import Chat from './components/chat/Chat';
import Sidebar from './components/sidebar/Sidebar';
import {useEffect,useState} from 'react'
import Pusher from 'pusher-js';
import axios from './axios'
function App() {

  const [messages,setMessages]=useState([]);
  const [rooms,setRooms]=useState([]);
  useEffect(()=>{
  axios.get('/messages/sync').then(response=>{
    setMessages(response.data);
  })
  },[])

  useEffect(()=>{
    axios.get('/chatroom/all').then(response=>{
      setRooms(response.data);
    })
    },[])

  useEffect(()=>{
    var pusher = new Pusher('f78449ff8f836718a72a', {
      cluster: 'ap2'
    });
  
    var channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
       setMessages([...messages,data]);
    });
return()=>{
  channel.unbind_all();
  channel.unsubscribe();
}

  },[messages])

  
useEffect(()=>{
  var pusher = new Pusher('f78449ff8f836718a72a', {
    cluster: 'ap2'
  });

  var channel = pusher.subscribe('chatrooms');
  channel.bind('inserted', function(data) {
    console.log("Inside Chat channel:",data)
     setRooms([data,...rooms]);
  });
return()=>{
  channel.unbind_all();
  channel.unsubscribe();
}},[rooms]);


  return (
    <div className="app">
     <div className="app__body">
       <Sidebar rooms={rooms} />
       <Chat messages={messages}  />
     </div>
    </div>
  );
}

export default App;
