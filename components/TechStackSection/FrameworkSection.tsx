import React, { FC } from "react";
import { TechSection } from "./TechSection";
import { frameworkStack } from "./stack"

export const FrameworkSection: FC = (): JSX.Element => {
    return (
        <TechSection id="framework-skill" backgroundColor="gray.100" header={{ color: "black", text: "Frameworks & Libraries" }} data={frameworkStack} />
    )
}