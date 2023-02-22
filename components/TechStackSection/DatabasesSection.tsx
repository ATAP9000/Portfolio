import React, { FC } from "react";
import { TechSection } from "./TechSection";
import { dbStack } from "./stack"

export const DatabaseSection: FC = (): JSX.Element => {
    return (
        <TechSection id="database-skill" backgroundColor="white" header={{ color: "black", text: "Databases" }} data={dbStack} />
    )
}