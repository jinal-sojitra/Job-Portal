import { Button } from "@chakra-ui/react";
import "./App.css";
import { Flex, Box } from "@chakra-ui/react";
// import Footer from './components/Footer/Footer.js'
// import Header from './components/Header/Header.js'
// import LoginPage from './components/Login/LoginPage.js'
// import SplashScreen from './components/SplashScreen.js'
import Chat from "./components/Chatpage";
import Home from "./components/Home";
// import Registration from './components/Registration';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import SigninPage from "./components/Home";
import Navbar from "./components/Navbar";
import SideDrawer from "./components/miscelleneous/SideDrawer";
import LoginPage from "./components/LoginPage";
import Signup from "./components/Authentication/Signup";
import Chatpage from "./components/Chatpage";
import CreateJob from "./components/CreateJob";

function App() {
  return (
    <div className="App">
      {/* <Navbar/>
      <LoginPage /> */}
      <Flex direction="column" width="100%">
        <Box>
          <Navbar />
        </Box>
        <Box>
          <Routes>
            <Route path="/" exact element={<LoginPage />} />
            <Route path="/chat" exact element={<Chatpage />} />
            <Route path="/createJob" exact element={<CreateJob />} />
          </Routes>
        </Box>
      </Flex>
      {/* {/* } */}
      {/* </div> */}
      {/* <BrowserRouter> */}
      {/* <Chatpage /> */}

      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
