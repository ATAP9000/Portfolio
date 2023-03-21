import React, { FC } from "react";
import { FormControl, Button } from "@chakra-ui/react";
import { IFormButtonProps } from "./IProps";
import { useRouter } from 'next/router';
import { EnLocale } from '@/locales/en';
import { EsLocale } from '@/locales/es';
import { IProps as IPropLocale } from '@/locales/IProps';

export const FormButton: FC<IFormButtonProps> = (props): JSX.Element => {
    const router = useRouter();
    const { locale } = router;
    const lang : IPropLocale = (locale === 'en') ? new EnLocale() : new EsLocale();
    return (
        <FormControl id="name" float="right">
            <Button
                variant="solid"
                bg="black"
                color="white"
                onClick={props.onClick}
            >
                {lang.Send}
            </Button>
        </FormControl>
    )
}