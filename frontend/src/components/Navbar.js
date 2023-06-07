import React from "react";
import { Stack,Box, Flex, Space, Heading, Button } from "@chakra-ui/react";
import CreateJob from "./CreateJob";
import Chat from "./Chatpage";
import { NavLink } from "react-router-dom";
import JobPost from "./JobPost";

const Navbar = () => {
  return (
    <Flex justifyContent="space-between" bg="white" p={4} width="100%">
      {/* alignItems="center" */}
      <Heading size="md">Logo</Heading>
      <Stack direction="row">
        <Button>
          <NavLink as={<Chat />} to="/chat" p={2}>
            Chat
          </NavLink>
          {/* <NavLink as={RouterLink} to="/about" p={2}>
            About
          </NavLink> */}
        </Button>
        <Button>
          <NavLink as={<CreateJob />} to="/createJob" p={2}>
            Create Job
          </NavLink>
          {/* <NavLink as={RouterLink} to="/about" p={2}>
            About
          </NavLink> */}
        </Button>
        <Button>
          <NavLink as={<JobPost />} to="/jobs" p={2}>
            Jobs
          </NavLink>
          {/* <NavLink as={RouterLink} to="/about" p={2}>
            About
          </NavLink> */}
        </Button>
      </Stack>
    </Flex>
  );
};

export default Navbar;
