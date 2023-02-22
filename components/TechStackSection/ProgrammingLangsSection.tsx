import React, { FC } from "react";
import { TechSection } from "./TechSection";
import { langStack } from "./stack"

export const ProgrammingLangsSection: FC = (): JSX.Element => {
    return (
        <TechSection id="programming-skills" backgroundColor="white" header={{ color: "black", text: "Programming Languages" }} data={langStack} />
    )
}