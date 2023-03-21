import React, { FC } from "react";
import { ContactMeContainer } from "./ContactMeContainer";
import { ContactInfo } from "./ContactInfo"
import { ContactForm } from "./ContactForm"
import { Spacer } from "@chakra-ui/react";

export const ContactMeSection: FC = () => {
  return (
      //@ts-ignore
      <ContactMeContainer>
        <ContactInfo />
        <Spacer />
        <ContactForm />
      </ContactMeContainer>
  );
}