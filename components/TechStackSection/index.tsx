import React, { FC } from "react";
import { Box } from "@chakra-ui/react";
import { ProgrammingLangsSection } from "./ProgrammingLangsSection"
import { FrameworkSection } from "./FrameworkSection";
import { DatabaseSection } from "./DatabasesSection"

export const TechStackSection: FC = (): JSX.Element => {
    return (
        <Box id="tech-stack" >
            <ProgrammingLangsSection />
            <FrameworkSection />
            <DatabaseSection />
        </Box>
    )
}