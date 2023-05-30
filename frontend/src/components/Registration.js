import React from 'react'
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

const Registration = () => {
  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bgImage="url('D:\job portal\frontend\public\itOffice2.jpg')" // Replace with the path to your background image
      bgSize="cover"
      bgPosition="center"
    >
      <Box p={8} maxW="400px" bg="white" rounded="md" boxShadow="md">
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Enter your email" />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter your password" />
        </FormControl>

        <Button colorScheme="teal" mt={6} isFullWidth>
          Register
        </Button>
      </Box>
    </Flex>
  );
};

export default Registration
