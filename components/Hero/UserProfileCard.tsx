import React, { FC } from "react";
import { Box, Flex, Spacer, HStack, Icon } from "@chakra-ui/react";
import { UserProfile } from "./UserProfile";
import { Resume } from "./Resume";
import { Flag } from "./Flag";
import { Blob } from "../Blob";
import { IconLink } from "../Links/IconLink";
import { SiGithub, SiLinkedin } from "react-icons/si"

const Age = new Date().getFullYear() - 1997

export const UserProfileCard: FC = (): JSX.Element => {
    return (
        <Flex
        flex={1}
        justify={'center'}
        align={'center'}
        position={'relative'}
        w={'full'}>
            <Blob
                w={'150%'}
                h={'150%'}
                position={'absolute'}
                top={'-20%'}
                left={0}
                zIndex={-1}
                visibility={{ base: "hidden", sm: "hidden", md: "hidden", lg: "visible" }}
            />
            <Box
                position={'relative'}
                bg="white"
                maxW={"700px"}
                rounded={'2xl'}
                boxShadow={'2xl'}
                width={'full'}
                overflow={'hidden'}
                p={4}
            >
                <Flex>
                    <UserProfile fullname="Angelo Tarazona" age={Age} />
                    <Spacer />
                    <Flag />
                </Flex>
                <Resume />
                <Flex mt={{base: 5, sm: 5, md: 10, lg: 10}} justifyContent="flex-end" px={6} >
                    <HStack spacing={4} >
                    <IconLink icon={SiGithub} tooltip="Github" color={"gray.800"} href="https://github.com/ATAP9000"  text="" />
                    <IconLink icon={SiLinkedin} tooltip="Linkedin" color="#0077b5" href="https://www.linkedin.com/in/angelo-tarazona-350346241" text="" />
                    </HStack>
                </Flex>
            </Box>
    </Flex>
    )
}