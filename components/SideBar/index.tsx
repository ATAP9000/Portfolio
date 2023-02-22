import React, { FC } from "react";
import { Drawer, DrawerBody, DrawerOverlay, DrawerContent, DrawerCloseButton } from "@chakra-ui/react"
import { SideBarHeader } from  "./SideBarHeader"
import { SideBarList } from  "./SideBarList";
import { IProps } from "./IProps"

export const SideBar: FC<IProps> = (props): JSX.Element => {
    return (
        <Drawer
            isOpen={props.isOpen}
            placement='right'
            onClose={props.onClose}
        >
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <SideBarHeader />
                <DrawerBody>
                    <SideBarList isOpen={props.isOpen} onClose={props.onClose} />
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}