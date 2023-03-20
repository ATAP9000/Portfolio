import React, { FC } from "react";
import { HStack} from "@chakra-ui/react";
import { NavBarLink } from "../Links/NavBarLink";
import { links } from "./links";
import { useRouter } from 'next/router';
import { EnLocale } from '@/locales/en';
import { EsLocale } from '@/locales/es';
import { IProps as IPropLocale } from '@/locales/IProps';

export const NavBarLinkList: FC = (): JSX.Element => {
    const router = useRouter();
    const { locale } = router;
    const lang : IPropLocale = (locale === 'en') ? new EnLocale() : new EsLocale();

    return (
        <HStack display={{ base: "none", sm: "none", md: "none", lg: "block" }} spacing="10" >
            {
                links.map((link, index): JSX.Element => {
                    return (
                        <NavBarLink  
                            key={index}
                            href={link.href}
                            text={(Object.hasOwn(lang,link.text) ? lang[link.text] : "" )}
                            hasBackground={link.hasBackground}
                        />
                    )
                })
            }
        </HStack>
    )
}