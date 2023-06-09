import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import { Box, Container, Text,Tab,TabList,TabPanel,TabPanels,Tabs, Center } from '@chakra-ui/react'
import Login from './Authentication/Login';
import Signup from './Authentication/Signup';

const LoginPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if (user) navigate("/chat");
  });
  return (
    
        <Container maxW="xl" centerContent >
          <Box
            // d="flex"
            justifyContent="center"
            bg={"white"}
            w="100%"
            p={4}
            // bg="rgba(0, 0,0, 0.6)"
            m="40px 0 15px 0"
            borderRadius="lg"
            borderWidth="1px"
            color="black"
            alignItems="center"
          >
            <Tabs variant="soft-rounded">
              <TabList mb="1em">
                <Tab width="50%">Sign Up</Tab>
                <Tab width="50%">Login</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Signup />
                </TabPanel>
                <TabPanel>
                  <Login />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Container>
      
  );
}

export default LoginPage
