import React, { FC } from "react";
import { Box, Container, Flex } from "@chakra-ui/react";

export const ContactMeContainer: FC = (props): JSX.Element => {
    return (
        <Container id="contact-me" as="section" maxW="full" mt={0} centerContent overflow="hidden"  >
            <Flex my={10} >
                <Box
                    bg="black"
                    color="white"
                    borderRadius={{base: "inherit", sm: "inherit", lg: "md"}}
                    m={{ sm: 4, md: 16, lg: 10 }}
                    p={{ sm: 5, md: 5, lg: 16 }}
                >
                    <Box p={4} display={"flex"}>
                        <Flex>
                            {props.children}
                        </Flex>
                    </Box>
                </Box>
            </Flex>
        </Container>
    )
}