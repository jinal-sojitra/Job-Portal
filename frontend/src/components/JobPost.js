import React from 'react'
import { Card,Badge,Box, CardHeader,Image,Stack,Heading,Text,Divider,ButtonGroup,Button, CardBody, CardFooter, HStack } from "@chakra-ui/react";
import { ChatState } from "../Contexts/ChatProvider";
import axios from 'axios';
import { useToast } from "@chakra-ui/react";

const JobPost = (props) => {
   let { job,title, description, company, skills, experience, employmentType, location,packageOffered } = props;
  const { user } = ChatState();
  const toast = useToast();
  const submitHandler = async () => {
     try {
       const config = {
         headers: {
           "Content-type": "application/json",
         },
       };
       const { data } = await axios.post(
         "/application",
         { user: user, job: job },
         config
       );
       console.log(data);
       toast({
         title: "Application submitted Successfully",
         status: "success",
         duration: 5000,
         isClosable: true,
         position: "bottom",
       });
       
     } catch (error) {
       toast({
         title: "Error Occured!",
         description: error.response.data.message,
         status: "error",
         duration: 5000,
         isClosable: true,
         position: "bottom",
       });
     }
     
   };
  
  return (
    <div>
      <Card maxW="sm" bgColor="whiteAlpha.900">
        <CardBody>
          <Stack mt="6" spacing="3">
            <Heading size="lg">{title}</Heading>
            <Text>{description}</Text>
            <Text color="blue.600" fontSize="2xl">
              <i class="fa-sharp fa-solid fa-indian-rupee-sign"></i>
              {packageOffered}
            </Text>
            <Text color="black" fontSize="xl">
              {company}
            </Text>
            <Text color="blue.600" fontSize="2xl">
              <i class="fa-solid fa-location-dot"></i>
              {" " + location}
            </Text>
            <HStack>
              <Box right="10">
                <Badge
                  colorScheme="blue"
                  fontSize="md"
                  marginLeft="10"
                  borderRadius="md"
                  px="2"
                  py="1"
                >
                  {/* <i class="fa-duotone fa-briefcase"></i> */}
                  {skills}
                </Badge>
              </Box>

              <Box right="20">
                <Badge
                  colorScheme="blue"
                  fontSize="md"
                  borderRadius="md"
                  marginLeft="20"
                  px="2"
                  py="1"
                >
                  {/* <i class="fa-duotone fa-briefcase"></i> */}
                  {experience + " Years"}
                </Badge>
              </Box>
            </HStack>
            <Box position="absolute" right="-10" top="-8">
              <Badge
                colorScheme="blue"
                fontSize="xl"
                borderRadius="xl"
                px="2"
                py="1"
              >
                {/* <i class="fa-duotone fa-briefcase"></i> */}
                {employmentType}
              </Badge>
            </Box>
          </Stack>
        </CardBody>

        <Button
          colorScheme="blue"
          width="50%"
          marginLeft="90"
    onClick={submitHandler}
          bottom="2"
          justifyContent="center"
        >
          Apply now
        </Button>
      </Card>
    </div>
  );
}

export default JobPost
