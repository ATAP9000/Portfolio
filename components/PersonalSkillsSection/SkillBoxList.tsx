import React, { FC } from "react";
import { Container } from "@chakra-ui/react";
import { SkillBox } from "./SkillBox";
import { enSkills, esSkills } from "./skills";
import { useRouter } from 'next/router';
import { EnLocale } from '@/locales/en';
import { EsLocale } from '@/locales/es';
import { IProps as IPropLocale } from '@/locales/IProps';

export const SkillBoxList: FC = (): JSX.Element => {
    const router = useRouter();
    const { locale } = router;
    const lang : IPropLocale = (locale === 'en') ? new EnLocale() : new EsLocale();
    const skills = (locale === 'en') ? enSkills : esSkills;
    return (
        <Container mt="16" maxW="7xl" >
            {
                skills.map((skill): JSX.Element => {
                    return (
                        <SkillBox 
                            icon={skill.icon}
                            title={skill.title}
                            description={skill.description}
                            reverse={skill.reverse}
                        />
                    )
                })
            }
        </Container>
    )
}