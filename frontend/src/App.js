import { Button } from '@chakra-ui/react';
import './App.css';
// import Footer from './components/Footer/Footer.js'
// import Header from './components/Header/Header.js'
// import LoginPage from './components/Login/LoginPage.js'
// import SplashScreen from './components/SplashScreen.js'
import Chat from './components/Chat';
import Home from './components/Home';
// import Registration from './components/Registration';
import {Route} from 'react-router-dom'
import SplashScreen from './components/SplashScreen';
import SigninPage from './components/Home';
import Navbar from './components/Navbar';
import SideDrawer from './components/miscelleneous/SideDrawer';
import LoginPage from './components/LoginPage';
import Signup from './components/Authentication/Signup';

function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      
      <LoginPage/>
      {/* <SideDrawer></SideDrawer> */}
      {/* <Chat></Chat> */}
    </div>
  );
}

export default App;
