import { IProps as ISkillProps } from "./IProps";
import { AiOutlineComment } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { MdGroups } from "react-icons/md";
 
// obtener estado para cambiar los textos
export const enSkills: Array<ISkillProps> = [
    {
        icon: AiOutlineComment,
        title: "Effective Communication",
        description: "Used effective communication skills to perfom public speeches when talking in daily meetings and giving the client project specifications and also participating in team discussions",
        reverse: false
    },
    {
        icon: FaTools,
        title: "Problem Solving",
        description: "Since i started my journey through programming i've improve my problem solving skills by analytical and logic thinking and researching",
        reverse: true
    },
    {
        icon: GiBrain,
        title: "Critical Thinking",
        description: "Taught myself how to find the best approach to solve a problem or implementing a functionality taking into consideration critical factors such as performance, productivity, time and good practices",
        reverse: false
    },
    {
        icon: MdGroups,
        title: "Teamwork",
        description: "Used interpersonal skills to collaborate with other programmers or people involucrated in the projects.",
        reverse: true
    }
]

export const esSkills: Array<ISkillProps> = [
    {
        icon: AiOutlineComment,
        title: "Comunicacion Efectiva",
        description: "Utilizar habilidades de comunicación eficaces para hablar en público en las reuniones diarias y dar las especificaciones del proyecto al cliente, así como participar en los debates del equipo.",
        reverse: false
    },
    {
        icon: FaTools,
        title: "Resolución de problemas",
        description: "Desde que comencé mi andadura en la programación he mejorado mi capacidad de resolución de problemas mediante el análisis, el pensamiento lógico y la investigación.",
        reverse: true
    },
    {
        icon: GiBrain,
        title: "Pensamiento Crítico",
        description: "He aprendido a encontrar el mejor enfoque para resolver un problema o implantar una funcionalidad teniendo en cuenta factores críticos como el rendimiento, la productividad, el tiempo y las buenas prácticas.",
        reverse: false
    },
    {
        icon: MdGroups,
        title: "Trabajo en Equipo",
        description: "Utilizó habilidades interpersonales para colaborar con otros programadores o personas implicadas en los proyectos.",
        reverse: true
    }
]