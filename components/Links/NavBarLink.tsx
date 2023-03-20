import React, { FC } from "react";
import NextLink from "next/link"
import { Link } from "@chakra-ui/react"
import { INavBarLink } from "./IProps"
import { useColorMode } from "@chakra-ui/color-mode";

export const NavBarLink: FC<INavBarLink> = (props): JSX.Element => {
    const { colorMode } = useColorMode();
    return (
            <Link as={NextLink}
                href={props.href} scroll passHref
                fontSize={16}
                fontWeight="normal"
                _hover={{ textDecoration: "none" }}
                p={props.hasBackground ? 2 : 0}
                color={props.hasBackground ? (colorMode === "dark" ? "black" : "white") : ""}
                bg={props.hasBackground ? (colorMode === "dark" ? "white" : "black")  : ""}
            >
                {props.text}
            </Link>
    )
}