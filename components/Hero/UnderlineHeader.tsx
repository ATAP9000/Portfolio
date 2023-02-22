import React, { FC } from "react";
import { Heading, Text } from "@chakra-ui/react";
import { IProps } from "./IProps"

export const UnderlineHeader: FC<IProps> = (props): JSX.Element => {
    return (
        <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '4xl', sm: "2xl", md: "6xl", lg: "6xl" }}>
            <Text
                as={'span'}
                position={'relative'}
                _after={{
                    content: "''",
                    width: 'full',
                    height: '30%',
                    position: 'absolute',
                    bottom: 1,
                    left: 0,
                    bg: 'blackAlpha.400',
                    zIndex: -1,
                }}>
                {props.text}
            </Text>
        </Heading>
    )
}