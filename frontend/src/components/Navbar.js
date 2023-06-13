import React from "react";
import { Stack,Box, Flex, Space, Heading, Button } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { ChatState } from "../Contexts/ChatProvider";
import MyProfile from "./MyProfile";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const {user}=ChatState()


  const isAdmin = user && user.role === "employer"
  return (
    <Flex justifyContent="space-between" bg="white" p={4} width="100%">
      {/* alignItems="center" */}

      <Heading size="md" color="primary">
        <i class="fa-solid fa-briefcase"></i> Job Portal
      </Heading>
      <Stack direction="row">
        {user && (
          <Button>
            <NavLink to="/chat" p={2}>
              Chat
            </NavLink>
          </Button>
        )}
        {isAdmin && (
          <Button>
            <NavLink to="/createJob" p={2}>
              Create Job
            </NavLink>
          </Button>
        )}
        {user && !isAdmin && (
          <Button>
            <NavLink to="/jobs" p={2}>
              Jobs
            </NavLink>
            {/* <NavLink as={RouterLink} to="/about" p={2}>
            About
          </NavLink> */}
          </Button>
        )}
        {user && (
          <MyProfile/>
        )}
      </Stack>
    </Flex>
  );
};

export default Navbar;
