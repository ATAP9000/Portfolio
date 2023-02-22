import React, { FC } from "react";
import NextLink from "next/link"
import { Link } from "@chakra-ui/react"
import { INavBarLink } from "./IProps"

export const NavBarLink: FC<INavBarLink> = (props): JSX.Element => {
    return (
            <Link as={NextLink}
                href={props.href} scroll passHref
                fontSize={16}
                fontWeight="normal"
                _hover={{ textDecoration: "none" }}
                color={props.hasBackground ? "white" : "black"}
                p={props.hasBackground ? 2 : 2}
                bg={props.hasBackground ? "black" : "white"}
            >
                {props.text}
            </Link>
    )
}