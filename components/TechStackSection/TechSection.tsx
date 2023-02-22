import React, { FC } from "react";
import { Box } from "@chakra-ui/react";
import { TechBoxList } from "./TechBoxList";
import { CenterHeader } from "../CenterHeader";
import { ITechSectionProps } from "./IProps";

export const TechSection: FC<ITechSectionProps> = (props): JSX.Element => {
  return (
    <Box
      id={props.id}
      as="section"
      p={{ base: 2, sm: 2, md: 4, lg: 4 }}
      bg={props.backgroundColor}
    >
      <CenterHeader color={props.header.color} text={props.header.text} />
      <TechBoxList data={props.data}/>
    </Box>
  );
};