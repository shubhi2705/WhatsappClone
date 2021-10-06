
import './App.css';
import Chat from './components/chat/Chat';
import Sidebar from './components/sidebar/Sidebar';
import {useEffect} from 'react'
import Pusher from 'pusher-js'
function App() {
  useEffect(()=>{
    var pusher = new Pusher('f78449ff8f836718a72a', {
      cluster: 'ap2'
    });
  
    var channel = pusher.subscribe('messages');
    channel.bind('inserted', function(data) {
      alert(JSON.stringify(data));
    });
  },[])
  
  return (
    <div className="app">
     <div className="app__body">
       <Sidebar />
       <Chat />
     </div>
    </div>
  );
}

export default App;
