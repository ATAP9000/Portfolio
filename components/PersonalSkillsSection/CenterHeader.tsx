import React, { FC } from "react";
import { Center, Heading, Text } from "@chakra-ui/react";
import { ICenterHeader } from "../IProps";

export const CenterHeader: FC<ICenterHeader> = (props): JSX.Element => {
    return (
        <Center my="6" >
            <Heading color={props.color} as="h1" fontSize={{base: "2xl", sm: "2xl", md: "4xl", lg: "5xl"}} letterSpacing={1.4} lineHeight={1.1} >
                <Text>
                    {props.text}
                </Text>
            </Heading>
        </Center>
    )
}