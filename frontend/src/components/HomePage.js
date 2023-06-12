import { Box, Flex, Heading, Button } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <Flex align="center" justify="center" minHeight="100vh" bg="gray.100">
      <Box p={8} borderWidth={1} borderRadius="lg" bg="white" shadow="lg">
        <Heading mb={4} textAlign="center">
          Welcome to Job Portal
        </Heading>
        <Button colorScheme="blue" size="lg" width="full">
          Get Started
        </Button>
      </Box>
    </Flex>
  );
};

export default HomePage;
