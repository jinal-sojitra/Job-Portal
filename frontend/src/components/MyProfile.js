import React from 'react'
import { Button } from "@chakra-ui/button";
import { useDisclosure } from "@chakra-ui/hooks";
import { useNavigate } from 'react-router-dom';
import { Input } from "@chakra-ui/input";
import { Box, Stack, Text } from "@chakra-ui/layout";
import ProfileModal from './miscelleneous/ProfileModal';
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import { ChatState } from '../Contexts/ChatProvider';

import {ChevronDownIcon } from "@chakra-ui/icons";
import { Avatar } from "@chakra-ui/avatar";
const MyProfile = () => {
    const { user } = ChatState();
    const navigate = useNavigate();

    const logoutHandler = () => {
      localStorage.removeItem("userInfo");
      navigate("/");
    };
  return (
    <div>
      <Menu>
        <MenuButton as={Button} bg="white" rightIcon={<ChevronDownIcon />}>
          <Avatar size="sm" cursor="pointer" name={user.name} src={user.pic} />
        </MenuButton>

        <MenuList>
          <ProfileModal user={user}>
            <MenuItem>My Profile</MenuItem>{" "}
          </ProfileModal>
          <MenuDivider />
          <MenuItem onClick={logoutHandler}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}

export default MyProfile
