import React, { FC } from "react";
import { Box, Center, Icon, Text } from "@chakra-ui/react";
import { TechPopOver } from "./TechPopOver";
import { ITechBoxProps } from "./IProps";

export const TechBox: FC<ITechBoxProps> = (props): JSX.Element => {
  return (
    <TechPopOver header={props.text} data={props.skills}>
      <Box
        maxW="32"
        w="32"
        h="32"
        bg={props.backgroundColor}
        borderRadius="md"
        boxShadow="md"
        cursor="pointer"
      >
        <Center my={6}>
          <Icon as={props.icon} w="12" h="12" color={props.color} />
        </Center>
        <Center>
          <Text fontWeight="medium" color={props.color}>
            {props.text}
          </Text>
        </Center>
      </Box>
    </TechPopOver>
  );
};