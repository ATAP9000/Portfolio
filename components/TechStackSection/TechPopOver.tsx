import React, { FC } from "react";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
    List,
    ListItem,
    ListIcon
} from '@chakra-ui/react'
import { AiFillCheckCircle } from "react-icons/ai";
import { IPopOverProps } from "./IProps";

  export const TechPopOver: FC<IPopOverProps> = (props): JSX.Element => {
    return (
        <Popover trigger="hover" >
            <PopoverTrigger>
                { props.children }
            </PopoverTrigger>
            <PopoverContent _focus={{
                border: "none"
            }} >
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>{props.header} skills</PopoverHeader>
                <PopoverBody>
                    <List>
                        {props.data.map((val, index): JSX.Element => {
                            return (
                                <ListItem key={index} >
                                    <ListIcon as={AiFillCheckCircle} color="green.300" />
                                    {val}
                                </ListItem>
                            )
                        })}
                    </List>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
  }