import { Flex,Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "./ChatBox";
import MyChats from "./MyChats";
import {Stack} from "@chakra-ui/react"
import SideDrawer from "./miscelleneous/SideDrawer";
import { ChatState } from "../Contexts/ChatProvider";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />} 
      <Stack direction="row" h="81.5vh">
        {/* display:"flex" */}
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />)}
      </Stack>
      {/* display:"flex" */}
      {/* <Flex flexDirection="column">
        <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px" >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Flex>
      </Box> */}
    </div>
  );
};

export default Chatpage;
