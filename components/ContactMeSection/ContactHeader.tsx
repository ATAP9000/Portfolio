import React, { FC } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useRouter } from 'next/router';
import { EnLocale } from '@/locales/en';
import { EsLocale } from '@/locales/es';
import { IProps as IPropLocale } from '@/locales/IProps';

export const ContactHeader: FC = (): JSX.Element => {
    const router = useRouter();
    const { locale } = router;
    const lang : IPropLocale = (locale === 'en') ? new EnLocale() : new EsLocale();
    return (
        <Box textAlign={{ base: "center", sm: "center", md: "center", lg: "start" }}>
            <Heading>{lang.Contact}</Heading>
            <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                {lang.ContactText}
            </Text>
        </Box>
    )
}