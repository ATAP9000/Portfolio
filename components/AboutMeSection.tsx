import React, { FC } from "react";
import { Box, Center, Text } from "@chakra-ui/react";
import { CenterHeader } from "./CenterHeader";
import { useRouter } from 'next/router';
import { EnLocale } from '@/locales/en';
import { EsLocale } from '@/locales/es';
import { IProps as IPropLocale } from '@/locales/IProps';

export const AboutMeSection: FC = (): JSX.Element => {
    const router = useRouter();
    const { locale } = router;
    const lang : IPropLocale = (locale === 'en') ? new EnLocale() : new EsLocale();

    return (
        <Box id="about-me" as="section" bg="black" px={8} pt={8} pb={10} >
            <CenterHeader color="white" text={lang.About} />
            <Center px={8} color="white">
                <Text fontSize={{ base: "13", md: "16", lg: "18" }} >
                    {lang.AboutMeResume}
                </Text>
            </Center>
        </Box>
    )
}