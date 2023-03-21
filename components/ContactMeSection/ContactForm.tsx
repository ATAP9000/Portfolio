import React, { FC } from "react";
import { useAppContext } from "@/context";
import { WrapItem, VStack, Box } from "@chakra-ui/react"
import { FormInput } from "./FormInput"
import { FormButton } from "./FormButton"
import { FormTextArea } from "./FormTextArea";
import { Loading } from "../Loading";
import { MdOutlineEmail } from "react-icons/md";
import { BsPerson } from 'react-icons/bs';
import { useContactForm } from "./hook";
import { useRouter } from 'next/router';
import { EnLocale } from '@/locales/en';
import { EsLocale } from '@/locales/es';
import { IProps as IPropLocale } from '@/locales/IProps';

// poner esto del contexto
export const ContactForm: FC = (): JSX.Element => {
    const { state, onChange, onFocus, onClick } = useContactForm();
    const context = useAppContext();
    const { isLoading } = context.state;
    const router = useRouter();
    const { locale } = router;
    const lang : IPropLocale = (locale === 'en') ? new EnLocale() : new EsLocale();
    return (
        <WrapItem width={"50%"}>
            <Box pos="relative" bg="white" borderRadius="md" boxShadow="md" width={"100%"} >
                { isLoading && <Loading /> }
                <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                        <FormInput name="name" value={state.name} label={lang.YourName} icon={BsPerson} error={state.error} onFocus={onFocus} onChange={onChange} />
                        <FormInput name="email" value={state.email} label={lang.Email} icon={MdOutlineEmail} error={state.error} onFocus={onFocus} onChange={onChange} />
                        <FormTextArea name="message" value={state.message} onChange={onChange} />
                        <FormButton onClick={onClick} />
                    </VStack>
                </Box>
            </Box>
        </WrapItem>
    )
}