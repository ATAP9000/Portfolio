import React, { FC } from "react";
import { TechSection } from "./TechSection";
import { enDBStack, esDBStack } from "./stack"
import { useRouter } from 'next/router';
import { EnLocale } from '@/locales/en';
import { EsLocale } from '@/locales/es';
import { IProps as IPropLocale } from '@/locales/IProps';

export const DatabaseSection: FC = (): JSX.Element => {
    const router = useRouter();
    const { locale } = router;
    const lang : IPropLocale = (locale === 'en') ? new EnLocale() : new EsLocale();
    const dbStack = (locale === 'en') ? enDBStack : esDBStack;
    return (
        <TechSection id="database-skill" backgroundColor="white" header={{ color: "black", text: lang.Databases }} data={dbStack} />
    )
}