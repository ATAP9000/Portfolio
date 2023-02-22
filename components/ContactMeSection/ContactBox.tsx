import React, { FC } from "react";
import { Button } from "@chakra-ui/react";
import { IProps } from "./IProps";

export const ContactBox: FC<IProps> = (props): JSX.Element => {
    return (
        <Button
            size="md"
            variant="ghost"
            color="#DCE2FF"
            leftIcon={<props.icon color="#1970F1" size="20px" />}>
            {props.text}
        </Button>
    )
}