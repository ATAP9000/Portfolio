import { IconType } from "react-icons";

export interface ILink {
    icon?: IconType;
    href: string;
    text: string;
}

export interface INavBarLink extends ILink{
    hasBackground: boolean;
}

export interface ISideBarLink extends ILink {
    icon: IconType;
    onClose?: () => void;
}

export interface IIconLink extends ILink {
    tooltip?: string;
    color?: string;
}