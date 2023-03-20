import React, { FC } from "react";
import { HStack, Icon, Button } from '@chakra-ui/react';
import { useColorMode } from "@chakra-ui/color-mode";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

export const ThemeSelect: FC = (): JSX.Element => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <HStack me={5}>
            <Button onClick={() => toggleColorMode()} me="5" variant={"ghost"}>
                {colorMode === "dark" ? (
                    <Icon as={BsFillMoonFill} color={"whiteAlpha.800"} />
                ) : (
                    <Icon as={BsFillSunFill} color={"blackAlpha.800"} />
                )}
            </Button>
        </HStack>
    )
}



