import React, { FC } from "react";
import { Container, Stack, Center } from "@chakra-ui/react";
import { UserProfileCard } from "./UserProfileCard";
import { BackgroundHeader } from "./BackgroundHeader"
import { UnderlineHeader } from "./UnderlineHeader";
import { useRouter } from 'next/router';
import { EnLocale } from '@/locales/en';
import { EsLocale } from '@/locales/es';
import { IProps } from '@/locales/IProps';

export const Hero: FC = (): JSX.Element => {
    const router = useRouter();
    const { locale } = router;
    const lang : IProps = (locale === 'en') ? new EnLocale() : new EsLocale();
    return (
        <Container id="hero" maxW={'7xl'} mb={8} >
            <Stack
                align={'center'}
                spacing={{ base: 8, md: 10 }}
                py={{ base: 20, sm: 28, md: 28, lg: 20 }}
                direction={{ base: "column", md: "column", lg: "row" }}>
                <Stack flex={1} spacing={{ base: 7, md: 10 }}>
                    <UnderlineHeader text="Angelo Tarazona" />
                    <BackgroundHeader text={lang.Title} />
                </Stack>
                <UserProfileCard />
            </Stack>
        </Container>
    )
}