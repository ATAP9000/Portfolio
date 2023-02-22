import React, { FC } from "react";
import { useRouter } from "next/router"
import { Button } from "@chakra-ui/react";
import { ISideBarLink } from "./IProps"

export const SideBarlink: FC<ISideBarLink> = (props): JSX.Element => {
    const { push } = useRouter();

    return (
        <Button border={"2px"} borderColor="black" leftIcon={<props.icon/>} textAlign="start" variant="outline" onClick={() => {
            push(props.href).then(() => {
                props.onClose!();
            })
        }} >
            { props.text }
        </Button>
    )
}