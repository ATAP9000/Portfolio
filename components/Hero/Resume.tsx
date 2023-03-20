import React, { FC } from "react";
import { VStack, Heading, Text } from "@chakra-ui/react";
import { useRouter } from 'next/router';
import { EnLocale } from '@/locales/en';
import { EsLocale } from '@/locales/es';
import { IProps as IPropLocale } from '@/locales/IProps';

export const Resume: FC = (): JSX.Element => {
    const router = useRouter();
    const { locale } = router;
    const lang : IPropLocale = (locale === 'en') ? new EnLocale() : new EsLocale();
    return (
        <VStack mt={4} spacing={2} alignItems="start" >
            <Heading as="h4" fontSize="md" fontWeight="medium">
                <Text color={"gray.800"}>
                    {lang.Resume}
                </Text>
            </Heading>
            <Heading as="h4" fontSize="sm" fontWeight="medium" color="gray.500" lineHeight="6" >
                <Text>
                    {lang.ResumeText}
                </Text>
            </Heading>
        </VStack>
    )
}