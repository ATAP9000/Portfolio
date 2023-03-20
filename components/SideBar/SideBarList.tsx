import React, { FC } from "react";
import { VStack } from "@chakra-ui/react";
import { SideBarlink } from "../Links/SideBarLink";
import { links } from "../SideBar/LinkList"
import { IProps } from "./IProps"
import { useRouter } from 'next/router';
import { EnLocale } from '@/locales/en';
import { EsLocale } from '@/locales/es';
import { IProps as IPropLocale } from '@/locales/IProps';

export const SideBarList: FC<IProps> = (props): JSX.Element => {
    const router = useRouter();
    const { locale } = router;
    const lang : IPropLocale = (locale === 'en') ? new EnLocale() : new EsLocale();
    return (
        <VStack spacing={6} >
            {
                links.map((link, index): JSX.Element => {
                    return (
                        <SideBarlink key={index} icon={link.icon!} text={(Object.hasOwn(lang,link.text) ? lang[link.text] : "")} href={link.href} onClose={props.onClose} />
                    )
                })
            }
        </VStack>
    )
}