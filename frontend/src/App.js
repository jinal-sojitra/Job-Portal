import { Button } from '@chakra-ui/react';
import './App.css';
// import Footer from './components/Footer/Footer.js'
// import Header from './components/Header/Header.js'
// import LoginPage from './components/Login/LoginPage.js'
// import SplashScreen from './components/SplashScreen.js'
import Chat from './components/Chat';
import Home from './components/Home';
import Registration from './components/Registration';
import {Route} from 'react-router-dom'
function App() {
  return (
    <>
      
      <Route exact path="/" component={Home} />
      <Registration/>
      <Route exact path="/chats" component={Chat} />
      {/* <Header/> */}
      {/* <SplashScreen/>
   <LoginPage/> */}
      {/* <Footer/> */}
    </>
  );
}

export default App;
