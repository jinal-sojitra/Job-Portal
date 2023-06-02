import React from 'react'
import io from 'socket.io-client';

const ENDPOINT = "http://localhost:3000";
var socket, selectedChatCompare;
const SingleChat = () => {
    useEffect(() => {
        socket = io(ENDPOINT)
    }, []);
    
  return (
    <div>
      
    </div>
  )
}

export default SingleChat
