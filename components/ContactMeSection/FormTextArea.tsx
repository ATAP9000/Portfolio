import React, { FC } from "react";
import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import { IFormTextAreaProps } from "./IProps";
import { useRouter } from 'next/router';
import { EnLocale } from '@/locales/en';
import { EsLocale } from '@/locales/es';
import { IProps as IPropLocale } from '@/locales/IProps';

export const FormTextArea: FC<IFormTextAreaProps> = (props): JSX.Element => {
    const router = useRouter();
    const { locale } = router;
    const lang : IPropLocale = (locale === 'en') ? new EnLocale() : new EsLocale();
    return (
        <FormControl id="name">
            <FormLabel>{lang.Message}</FormLabel>
            <Textarea
                name={props.name}
                borderColor="gray.300"
                _hover={{
                    borderRadius: 'gray.300',
                }}
                placeholder={lang.Message}
                onChange={props.onChange}
            />
        </FormControl>
    )
}