import React, { FC } from "react";
import { Container } from "@chakra-ui/react";
import { SkillBox } from "./SkillBox";
import { skills } from "./skills";

export const SkillBoxList: FC = (): JSX.Element => {
    return (
        <Container mt="16" maxW="7xl" >
            {
                skills.map((skill): JSX.Element => {
                    return (
                        <SkillBox 
                            icon={skill.icon}
                            title={skill.title}
                            description={skill.description}
                            reverse={skill.reverse}
                        />
                    )
                })
            }
        </Container>
    )
}