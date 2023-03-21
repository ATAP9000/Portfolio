import { IconType } from "react-icons";

export interface ITechSectionProps {
    id?: string;
    header: {
        color: string;
        text: string;
    }
    backgroundColor: string;
    data: ITechBoxProps[];
}

export interface IPopOverProps {
    header: string;
    data: string[];
    children: any;
}

export interface ITechBoxProps {
    icon: IconType;
    text: string;
    backgroundColor: string;
    color: string;
    skills: string[];
}

export interface ITechBoxListProps {
    data: ITechBoxProps[];
}