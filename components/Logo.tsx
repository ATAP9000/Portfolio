import React, { FC } from "react";
import { Box, Flex, Image} from "@chakra-ui/react";

export const Logo: FC = (): JSX.Element => {
    return (
        <Box visibility={{base: "visible", sm: "hidden", md: "hidden", lg: "visible"}} > 
            <Flex alignItems="center"  >
                <Image w={{base: 20, md: 15, lg: 24}} h={{base: 20, md: 15, lg: 24}} src="/logo.png" objectFit="cover" />
            </Flex>
        </Box>
    )
}