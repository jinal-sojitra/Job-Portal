import React from 'react'
import { Box } from "@chakra-ui/layout"
import MyChats from './MyChats'
import ChatBox from './ChatBox'
// import axios from 'axios'
// import { ChatState } from '../Contexts/ChatProvider'

const Chat = () => {
  // const { user }=ChatState()
    
  return (
    <div style={{width:"100%"}}>
      {/* {user && <SideDwawer />} */}
      <Box d="flex" justifyContent='space-between' w='100%' h='91.5vh'>
        <MyChats />
        <ChatBox/>
      </Box>
    </div>
  )
}

export default Chat
