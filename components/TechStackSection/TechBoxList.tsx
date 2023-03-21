import React, { FC } from "react";
import { Center, Wrap, WrapItem } from "@chakra-ui/react";
import { TechBox } from "./TechBox";
import { TechPopOver } from "./TechPopOver";
import { ITechBoxListProps } from "./IProps";

export const TechBoxList: FC<ITechBoxListProps> = (props): JSX.Element => {
  return (
    <Center paddingBottom={4}>
      <Wrap spacing={{ base: 6, lg: 10 }} justify="center">
        {props.data.map((tech, index): JSX.Element => {
          return (
            <WrapItem key={index} >
                <TechBox
                  backgroundColor={tech.backgroundColor}
                  color={tech.color}
                  icon={tech.icon}
                  text={tech.text}
                  skills={tech.skills}
                />
            </WrapItem>
          );
        })}
      </Wrap>
    </Center>
  );
};
