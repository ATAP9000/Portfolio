import React, { FC } from "react";
import { VStack, Heading, Text } from "@chakra-ui/react";
import { IProps } from "./IProps";

export const Resume: FC<IProps> = (props): JSX.Element => {
    return (
        <VStack mt={4} spacing={2} alignItems="start" >
            <Heading as="h4" fontSize="md" fontWeight="medium">
                <Text>
                    Resume
                </Text>
            </Heading>
            <Heading as="h4" fontSize="sm" fontWeight="medium" color="gray.500" lineHeight="6" >
                <Text>
                    {props.text}
                </Text>
            </Heading>
        </VStack>
    )
}