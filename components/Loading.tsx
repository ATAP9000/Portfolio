import React, { FC } from "react";
import { Flex, Spinner } from "@chakra-ui/react";

export const Loading: FC = (): JSX.Element => {
    return (
        <Flex align="center" justify="center" pos="absolute" top={0} left={0} w="100%" h="100%" bg="rgba(0, 0, 0, 0.8)">
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
        </Flex>
    )
}