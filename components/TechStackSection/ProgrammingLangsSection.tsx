import React, { FC } from "react";
import { TechSection } from "./TechSection";
import { enLangStack, esLangStack } from "./stack"
import { useRouter } from 'next/router';
import { EnLocale } from '@/locales/en';
import { EsLocale } from '@/locales/es';
import { IProps as IPropLocale } from '@/locales/IProps';

export const ProgrammingLangsSection: FC = (): JSX.Element => {
    const router = useRouter();
    const { locale } = router;
    const lang : IPropLocale = (locale === 'en') ? new EnLocale() : new EsLocale();
    const langStack = (locale === 'en') ? enLangStack : esLangStack;
    return (
        <TechSection id="programming-skills" backgroundColor="white" header={{ color: "black", text:lang.ProgLangs }} data={langStack} />
    )
}