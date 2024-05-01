// Complete the Index page component here
// Use chakra-ui
import React, { useState } from "react";
import { ChakraProvider, Box, VStack, Button, Text, Input, Checkbox, extendTheme, Flex, Spacer, IconButton, useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Link } from "@chakra-ui/react";
import { FaUser, FaAddressBook, FaFile, FaHeartbeat, FaDollarSign, FaComments, FaMapMarkedAlt, FaStickyNote, FaBars } from "react-icons/fa";

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
    },
  },
});

const MenuLink = ({ icon, children, ...rest }) => (
  <Button leftIcon={icon} justifyContent="flex-start" variant="ghost" width="full" {...rest}>
    {children}
  </Button>
);

const SidebarContent = ({ onClose }) => (
  <VStack align="stretch" p={5}>
    <MenuLink icon={<FaUser />} onClick={onClose}>
      Profile
    </MenuLink>
    <MenuLink icon={<FaAddressBook />} onClick={onClose}>
      Contacts
    </MenuLink>
    <MenuLink icon={<FaFile />} onClick={onClose}>
      Drive
    </MenuLink>
    <MenuLink icon={<FaHeartbeat />} onClick={onClose}>
      Health
    </MenuLink>
    <MenuLink icon={<FaDollarSign />} onClick={onClose}>
      Assets
    </MenuLink>
    <MenuLink icon={<FaComments />} onClick={onClose}>
      Chat
    </MenuLink>
    <MenuLink icon={<FaMapMarkedAlt />} onClick={onClose}>
      Maps
    </MenuLink>
    <MenuLink icon={<FaStickyNote />} onClick={onClose}>
      Notes
    </MenuLink>
  </VStack>
);

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    // Placeholder for login logic
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <ChakraProvider theme={theme}>
      <Box p={4}>
        <Flex>
          <IconButton icon={<FaBars />} variant="outline" onClick={onOpen} aria-label="Open Menu" />
          <Spacer />
          <IconButton icon={<FaUser />} onClick={isLoggedIn ? () => navigate("/profile") : onOpen} aria-label={isLoggedIn ? "Go to Profile" : "Open Login"} />
        </Flex>

        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">Menu</DrawerHeader>
            <DrawerBody>
              <SidebarContent onClose={onClose} />
            </DrawerBody>
          </DrawerContent>
        </Drawer>

        {!isLoggedIn ? (
          <VStack spacing={4} align="stretch" mt={10}>
            <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Checkbox isChecked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}>
              Remember Me
            </Checkbox>
            <Button onClick={handleLogin}>Login</Button>
          </VStack>
        ) : (
          <Text mt={10}>Welcome to your dashboard!</Text>
        )}
      </Box>
    </ChakraProvider>
  );
};

export default Index;
