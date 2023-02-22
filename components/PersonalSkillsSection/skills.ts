import { IProps as ISkillProps } from "./IProps";
import { AiOutlineComment } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { MdGroups } from "react-icons/md";

export const skills: Array<ISkillProps> = [
    {
        icon: AiOutlineComment,
        title: "Effective Communication",
        description: "Used effective communication skills to perfom public speeches when talking in daily meetings and giving the client project specifications and also participating in team discussions",
        reverse: false
    },
    {
        icon: FaTools,
        title: "Problem Solving",
        description: "Since i started my journey through programming i've improve my problem solving skills by analytical and logic thinking and google researching",
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
        description: "Used interpersonal skills to collaborate with other programmers to develop and deploy company Norkut's a web management system",
        reverse: true
    }
]