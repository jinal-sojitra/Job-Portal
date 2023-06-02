import React, { useState } from 'react'
import { Box, Text, Menu, MenuButton, MenuList, MenuItem, MenuDivider} from '@chakra-ui/react'
import {BellIcon,ChevronDownIcon} from '@chakra-ui/icons'
import { Button, Tooltip } from '@chakra-ui/react'
import { Avatar } from '@chakra-ui/avatar'
const SideDrawer = () => {
    const [search, setSearch] = useState("")
    const [searchResult, setSearchResult]=useState([])
    const [loading, setLoading] = useState(false)
    const [loadingChat, setloadingChat] = useState();
  
    return (
      <>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          bg="white"
          w="100%"
          p="5px 10px 5px 10px"
          borderWidth="5px"
        >
          <Tooltip
            label="Search Employers to Chat"
            hasArrow
            placement="bottom-end"
          >
            <Button variant="ghost">
              <i class="fa-solid fa-magnifying-glass"></i>
              <Text d={{ base: "none", md: "flex" }} px="4">
                Search Employer
              </Text>
            </Button>
          </Tooltip>
          <Text fontSize="2xl">Talk to Employers</Text>

          <Menu>
            <MenuButton p={1}>
              <BellIcon />
            </MenuButton>
          </Menu>

          <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
                        <Avatar size='sm' cursor='pointer' />
                        
                    </MenuButton>
                    <MenuList>
                        <MenuItem>My Profile</MenuItem>
                        <MenuDivider/>
                        <MenuItem>Logout</MenuItem>
                    </MenuList>
          </Menu>
        </Box>
      </>
    );
}

export default SideDrawer
