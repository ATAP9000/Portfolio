import React, { FC } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { ISkillDescription } from "./IProps";

export const SkillDescription: FC<ISkillDescription> = (props): JSX.Element => {
    return (
        <Box>
            <Heading as="h4" mb={4} color="white" fontSize={{ base: "18px", lg:"28px" }}>
                {props.header}
            </Heading>
            <Text color="white" fontSize={{base: "14px", lg: "18"}} >
                {props.description}
            </Text>
        </Box>
    )
}