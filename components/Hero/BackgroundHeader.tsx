import React, { FC } from "react";
import { Heading, Text } from "@chakra-ui/react";
import { IProps } from "./IProps";

export const BackgroundHeader: FC<IProps> = (props): JSX.Element => {
    return (
        <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '2xl', sm: "1xl", md: '2xl', lg: '4xl' }}
        >
            <Text as={'span'} p={2} color={'white'} bg="black" >
                {props.text}
            </Text>
        </Heading>
    )
}