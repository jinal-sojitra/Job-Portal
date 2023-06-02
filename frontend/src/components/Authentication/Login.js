import React, { useState } from "react";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import axios from "axios"
import {useHistory} from "react-router-dom"
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false)
  const toast = useToast()
  const history=useHistory()

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please Fill all the Fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false)
      return;
    }
      
      try {
        const config = {
          headers: {
            "Content-type": "application/json"
          }
        }
        const { data } = await axios.post("api/user/login",
          { email, password},
          config)
        toast({
          title: "Login Successful",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        localStorage.setItem('userInfo', JSON.stringify(data))
        setLoading(false);
        history.push('/home')
      } catch (error) {
        toast({
          title: "Error Occured!!",
          description: error.responce.data.message,
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setLoading(false)
      }
    }
        
      const handleClick = () => setShow(!show);
      return (
        <VStack spacing="5px" color="black">
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={show ? "text" : "password"}
                placeholder="Create a password"
                onChange={(e) => setPassword(e.target.value)}
              ></Input>

              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? <ViewOffIcon onClick={handleClick} /> : <ViewIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>

          <Button
            colorScheme="blue"
            width="100%"
            style={{ marginTop: 15 }}
            onClick={submitHandler}
          >
            Login
          </Button>
        </VStack>
      );
    };
  

export default Login;