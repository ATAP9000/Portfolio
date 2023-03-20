import React, { FC } from "react";
import { VStack, HStack, Heading, Text, Avatar } from "@chakra-ui/react";
import { IProfileData } from "./IProps"
import { useRouter } from 'next/router';

export const UserProfile: FC<IProfileData> =  (props): JSX.Element => {
    const router = useRouter();
    const { locale } = router;
    return (
        <HStack spacing={2} >
            <Avatar src="/me.jpg" size="lg" />
            <VStack alignItems="start" >
                <Heading as="h4" fontSize="md" fontWeight="bold">
                    <Text color={"gray.800"}>
                        {props.fullname}
                    </Text>
                </Heading>
                <Heading as="h4" fontSize="sm" fontWeight="medium" color="gray.500" >
                    <Text color={"gray.800"}>
                        {props.age} {(locale === 'en') ? "years old" : "años"}
                    </Text>
                </Heading>
            </VStack>
        </HStack>
    )
}