import React, { useCallback, useState } from "react";
import { useToast } from "@chakra-ui/react"
import { IEmail } from "@/services/mailer/IEMailService";
import { useAppContext } from "@/context";
import { MailerService } from "@/services";
import { IState } from "./IState";

export const useContactForm = () => {
    const service: MailerService = new MailerService();
    const toast = useToast()

    const [state, setState] = useState<IState>({
        name: "",
        email: "",
        message: "",
        error: false,
    });

    const { dispatch } = useAppContext();

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        const { name, value } = e.target;

        setState({
            ...state,
            [name]: value
        })
    }, [state.name, state.email, state.message]);

    const onFocus = useCallback(() => {
        setState({
            ...state,
            error: false
        })
    }, [state]);

    const onClick = useCallback(async () => {
        const data: IEmail = {
            Email: state.email,
            Name: state.name,
            Message: state.message 
        }

        dispatch!({ type: "REQUEST" });

        await service.SendEmail(data).then((message) => {
            toast({
                title: message,
                status: "success",
                duration: 5000,
                isClosable: true
            });
        }).catch((error) => {
            toast({
                title: error.message,
                status: "error",
                duration: 5000,
                isClosable: true
            });
        });

        dispatch!({ type: "DONE" });
    }, [state])

    return { state, onFocus, onChange, onClick };
}