import React from "react";
import { Select } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
// import { Box } from 'framer-motion';
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { VStack, Box, Container } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const CreateJob = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const toast = useToast();
  const navigate = useNavigate();

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [company, setCompany] = useState();
  const [skills, setSkills] = useState([]);
  const [experience, setExperience] = useState();
  const [employmentType, setEmploymentType] = useState();
  const [location, setLocation] = useState();
  const [packageOffered, setPackageOffered] = useState();

  const submitHandler = async () => {
    console.log(
      `title "${title},
      description ${description},
      company ${company},
      skills ${skills},
      experience ${experience},
      employmentType ${employmentType},
      location ${location},
      packageOffered ${packageOffered}`
    );
    if (
      !title ||
      !description ||
      !company ||
      !skills ||
      !experience ||
      !employmentType ||
      !location ||
      !packageOffered
    ) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/job",
        {
          title,
          description,
          company,
          skills,
          experience,
          employmentType,
          location,
          packageOffered,
        },
        config
      );
      console.log(data);
      toast({
        title: "Job Posted Successfully",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      // localStorage.setItem("jobInfo", JSON.stringify(data));
      // navigate("/home");
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
    <Container maxW="xxl" centerContent>
      <Box
        marginTop="15px"
        alignItems="center"
        p={3}
        bg="white"
        w={{ base: "100%", md: "31%" }}
        borderRadius="lg"
        borderWidth="1px"
      >
        <VStack spacing="5px">
          <FormControl id="title" isRequired>
            <FormLabel>Title</FormLabel>
            <Input
              placeholder="Enter Job Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormControl>
          <FormControl id="description" isRequired>
            <FormLabel>Description</FormLabel>
            <Input
              placeholder="Enter Description"
              onChange={(e) => setDescription(e.target.value)}
            />
          </FormControl>
          <FormControl id="company" isRequired>
            <FormLabel>Company</FormLabel>
            <Input
              placeholder="Enter Company Name"
              onChange={(e) => setCompany(e.target.value)}
            />
          </FormControl>
          <FormControl id="skills" isRequired>
            <FormLabel>Skills</FormLabel>

            <Input
              placeholder="Enter Skills"
              onChange={(e) => setSkills(e.target.value)}
            />
          </FormControl>

          <FormControl id="experience" isRequired>
            <FormLabel>Experience</FormLabel>
            <Input
              placeholder="Enter No. of Years of Experience required"
              onChange={(e) => setExperience(e.target.value)}
            />
          </FormControl>

          <FormControl id="employment-type" isRequired>
            <FormLabel>Employment Type</FormLabel>
            <Select
              value={employmentType}
              onChange={(e) => setEmploymentType(e.target.value)}
            >
              <option value="internship">Internship</option>
              <option value="fulltime">Full-time</option>
            </Select>
          </FormControl>

          {/* add dropdown with options and reuse that in signup */}
          {/* <FormControl id="employmentType" isRequired>
            <FormLabel>Employment Type</FormLabel>
            <Select placeholder="Select an option">
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
          </FormControl> */}
          <FormControl id="location" isRequired>
            <FormLabel>Location</FormLabel>
            <Input
              placeholder="Enter City"
              onChange={(e) => setLocation(e.target.value)}
            />
          </FormControl>

          <FormControl id="packageOffered" isRequired>
            <FormLabel>Package</FormLabel>
            <Input
              placeholder="Enter Offered Package in Lakhs"
              onChange={(e) => setPackageOffered(e.target.value)}
            />
          </FormControl>
          <Button
            colorScheme="blue"
            width="100%"
            style={{ marginTop: 15 }}
            onClick={submitHandler}
          >
            Save Job
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

export default CreateJob;
