import { IconType } from "react-icons"

export interface IProps {
    icon: IconType;
    title: string;
    description: string;
    reverse?: boolean;
}
export interface IICon {
    icon: IconType;
}

export interface ISkillDescription {
    header: string;
    description: string;
}