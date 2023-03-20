import React, { FC } from "react";
import { Box } from "@chakra-ui/react"
import { SkillBoxList } from "./SkillBoxList"
import { CenterHeader } from "../CenterHeader";
import { useRouter } from 'next/router';
import { EnLocale } from '@/locales/en';
import { EsLocale } from '@/locales/es';
import { IProps as IPropLocale } from '@/locales/IProps';

export const PersonalSkillsSection: FC = (): JSX.Element => {
    const router = useRouter();
    const { locale } = router;
    const lang : IPropLocale = (locale === 'en') ? new EnLocale() : new EsLocale();

    return (
        <Box id="personal-skill" as="section" bg="black" p={4} >
            <CenterHeader color="white" text={lang.Skills} />
            <SkillBoxList />
        </Box>
    )
}