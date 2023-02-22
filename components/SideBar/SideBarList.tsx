import React, { FC } from "react";
import { VStack } from "@chakra-ui/react";
import { SideBarlink } from "../Links/SideBarLink";
import { links } from "../SideBar/LinkList"
import { IProps } from "./IProps"

export const SideBarList: FC<IProps> = (props): JSX.Element => {
    return (
        <VStack spacing={6} >
            {
                links.map((link, index): JSX.Element => {
                    return (
                        <SideBarlink key={index} icon={link.icon!} text={link.text} href={link.href} onClose={props.onClose} />
                    )
                })
            }
        </VStack>
    )
}