import React, { FC } from "react";
import { Box, Flex, Spacer, Icon, useDisclosure } from "@chakra-ui/react";
import { Logo } from "../components/Logo"
import { NavBarLinkList } from "./NavLinkList"
import { AiOutlineMenu } from "react-icons/ai"
import { SideBar } from "./SideBar";

/* Webpage Navbar */
export const NavBar: FC = (): JSX.Element => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Box as="header" bg="white" position="sticky" zIndex={10} top={0} px={[2, 6, 6]} py={2}>
                <Flex as="nav" flexDir="row" align="center">
                    <Logo />
                    <Spacer />
                    <NavBarLinkList />
                    <Icon cursor="pointer" display={{ base: "block", sm: "block", md: "none", lg: "none" }} as={AiOutlineMenu} w={6} h={6} mr={3} onClick={onOpen} />
                </Flex>
            </Box>
            <SideBar isOpen={isOpen} onClose={onClose} />
        </>
    )
}