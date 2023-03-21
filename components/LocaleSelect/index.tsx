import React, { FC, useEffect } from "react";
import { HStack, Select } from '@chakra-ui/react'
import { useRouter } from 'next/router';

export const LocaleSelect: FC = (): JSX.Element => {
    const router = useRouter();
    const { locale } = router;
    const changeLanguage = (e :any) => {
        const locale = e.target.value;
        router.push(router.basePath , router.basePath, { locale });
    };

    return (
        <HStack me={10}>
            <Select onChange={changeLanguage} variant={"flushed"} defaultValue={locale}>
                <option className="text-black" value="en">EN</option>
                <option className="text-black" value="es">ES</option>
            </Select>
        </HStack>
    )
}