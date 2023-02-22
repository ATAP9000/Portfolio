import React, { FC } from "react";
import { Box, Center, Text } from "@chakra-ui/react";
import { CenterHeader } from "./CenterHeader";

const text = `
Hello I am Angelo Tarazona, a systems engineer graduated from the university santa maria (Caracas), who works as a fullstack web developer and currently working so far in the national bank of credit (BNC) as part of the development of internal applications, where I have been assigned roles of backend and frontend, as well as handling database.  I have also been assigned to projects that use third party applications, SDKs, or require queries from a mainframe.
I'm currently considering to do projects to expand this portfolio, be it "simple" things that can provide some utility or are able to deepen my knowledge.
I am also willing to receive "quick" jobs such as application development, consulting or software development for thesis.
My hobbies range from anything related to technology, books, philosophy or religion. I am always willing to learn new things.
`

const textEsp = `
Hola soy Angelo Tarazona, un ingeniero de sistemas graduado en la universidad santa maria (Caracas), que ejerce como desarrollador web fullstack  y actualmente trabaja hasta los momentos en el banco nacional de credito (BNC) como parte del desarrollo de aplicaciones internas, donde se me han asignado roles de backend y frontend, como tambien manejo de base de datos.  Donde se me han asignado tambien proyectos que utilizan aplicaciones de terceros, SDKs, o requieren hacen consultas desde un mainframe.
Actualmente estoy considerando a hacer proyectos para expandir este portafolio, sean cosas "sencillas" pero que permitan brindar alguna utilidad o sean capaces de profundizar mis conocimientos.
Tambien estoy dispuesto a recibir trabajos "rapidos" como desarrollo de aplicaciones puntuales, asesoria o elaboracion del software para tesis.
Mis hobbies entran desde cualquier cosa relacionada con la tecnologia, Libros, Filosofia o religion. siempre estoy dispuesto a aprender cosas nuevas
`

export const AboutMeSection: FC = (): JSX.Element => {
    return (
        <Box id="about-me" as="section" bg="black" px={8} pt={8} pb={10} >
            <CenterHeader color="white" text="A little about me" />
            <Center px={8} color="white">
                <Text fontSize={{ base: "13", md: "16", lg: "18" }} >
                    {text}
                </Text>
            </Center>
        </Box>
    )
}