
import React, { FC } from "react";
import { VStack, Box } from "@chakra-ui/react";
import { ContactBox } from "./ContactBox"
import { contact } from "./info"

export const ContactInfoList: FC = (): JSX.Element => {
    return (
        <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
            <VStack pl={0} spacing={3} alignItems="flex-start">
                {
                    contact.map((info, index): JSX.Element => {
                        return (
                            <ContactBox key={index} icon={info.icon} text={info.text} />
                        )
                    })
                }
            </VStack>
        </Box>
    )
}