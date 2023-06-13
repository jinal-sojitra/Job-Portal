import React from "react";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "./styles/home.css";
import { VStack } from "@chakra-ui/layout";
import LoginPage from "./LoginPage";


const HomePage = () => {
  // const [login, setLogin] = useState(false); 
const navigate = useNavigate();
  const handleSignupClick = () => {
     navigate('/login'); // Set the showSignup state to true on button click
  };
  return (
    <div className="background">
      <div className="overlay"></div>
      <VStack>
        <div className="text-container">
          {/* <center> */}
          <h1>
            <bold>Welcome to Job Portal</bold>
          </h1>
          <br />
          <h2>
            <bold>Connecting Talent to Opportunities</bold>
          </h2>
          {/* </center> */}
          <Button
            colorScheme="blue"
            style={{ marginTop: 15 }}
            onClick={handleSignupClick}
            // isLoading={picLoading}
          >
            Sign Up
          </Button>
        </div>
      </VStack>
    </div>
  );
};

export default HomePage;
