import React, { FC } from "react";
import { Box, WrapItem,} from "@chakra-ui/react";
import { ContactHeader } from "./ContactHeader";
import { ContactInfoList } from "./ContactInfoList";

export const ContactInfo: FC = () => {
    return (
        <WrapItem width={"35%"}>
            <Box>
                <ContactHeader />
                <ContactInfoList />
            </Box>
        </WrapItem>
    )
}