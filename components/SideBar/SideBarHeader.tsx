import React, { FC } from "react";
import { DrawerHeader, Center, Image } from "@chakra-ui/react";

export const SideBarHeader: FC = (): JSX.Element => {
    return (
        <DrawerHeader>
            <Center>
                <Image w={40} h={40} src="/logo.png" />
            </Center>
        </DrawerHeader>
    )
}