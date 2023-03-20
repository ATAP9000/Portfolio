import React, { FC } from "react";
import { TechSection } from "./TechSection";
import { enFrameworkStack, esFrameworkStack } from "./stack"
import { useRouter } from 'next/router';
import { EnLocale } from '@/locales/en';
import { EsLocale } from '@/locales/es';
import { IProps as IPropLocale } from '@/locales/IProps';

export const FrameworkSection: FC = (): JSX.Element => {
    const router = useRouter();
    const { locale } = router;
    const lang : IPropLocale = (locale === 'en') ? new EnLocale() : new EsLocale();
    const frameworkStack = (locale === 'en') ? enFrameworkStack : esFrameworkStack;
    return (
        <TechSection id="framework-skill" backgroundColor="gray.100" header={{ color: "black", text: lang.Frameworks }} data={frameworkStack} />
    )
}