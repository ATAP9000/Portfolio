import React, { FC } from "react";
import { ContactMeContainer } from "./ContactMeContainer";
import { ContactInfo } from "./ContactInfo"
import { ContactForm } from "./ContactForm"

export const ContactMeSection: FC = () => {
  return (
      <ContactMeContainer>
        <ContactInfo />
        <ContactForm />
      </ContactMeContainer>
  );
}