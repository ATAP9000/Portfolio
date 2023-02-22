import React, { FC } from "react";
import { FormControl, FormLabel, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { IFormInputProps } from "./IProps";

export const FormInput: FC<IFormInputProps> = (props): JSX.Element => {
    return (
        <FormControl id="name">
            <FormLabel>{props.label}</FormLabel>
            { props.error && <FormLabel color="red" fontSize="small">*Field cannot be empty</FormLabel> }
            <InputGroup borderColor="#E0E1E7">
                <InputLeftElement
                    pointerEvents="none"
                    children={<props.icon color="gray.800" />}
                />
                <Input 
                    type="text" 
                    borderColor={ props.error ? "red" : "gray.100" } 
                    name={props.name} value={props.value} 
                    size="md" onFocus={props.onFocus} 
                    onChange={props.onChange} 
                />
            </InputGroup>
        </FormControl>
    )
}