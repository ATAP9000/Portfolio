import React, { FC } from "react";
import { HStack, Spacer } from "@chakra-ui/react";
import { IconBox } from "./IconBox";
import { SkillDescription } from "./SkillDescription";
import { IProps } from "./IProps"

export const SkillBox: FC<IProps> = (props): JSX.Element => {
    const NormalFlow = () => {
        return (
            <HStack my="16" spacing={10}>
                <IconBox icon={props.icon} />
                <SkillDescription
                    header={props.title}
                    description={props.description}
                />
            </HStack>
        )
    }

    const ReverseFlow = () => {
        return (
            <HStack my="16" spacing={10}>
                <SkillDescription
                    header={props.title}
                    description={props.description}
                />
                <Spacer />
                <IconBox icon={props.icon} />
            </HStack>
        )
    }

    return props.reverse ? <ReverseFlow /> : <NormalFlow />
}