import React, { FC } from "react";
import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";
import { IFormTextAreaProps } from "./IProps"

export const FormTextArea: FC<IFormTextAreaProps> = (props): JSX.Element => {
    return (
        <FormControl id="name">
            <FormLabel>Message</FormLabel>
            <Textarea
                name={props.name}
                borderColor="gray.300"
                _hover={{
                    borderRadius: 'gray.300',
                }}
                placeholder="message"
                onChange={props.onChange}
            />
        </FormControl>
    )
}