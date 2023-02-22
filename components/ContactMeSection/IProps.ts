import { IconType } from "react-icons";

export interface IProps {
    icon: IconType;
    text: string;
}

export interface IFormInputProps {
    label: string;
    icon: IconType;
    name: string;
    value: string;
    error: boolean;
    onFocus: () => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IFormTextAreaProps {
    name: string;
    value: string;
    onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface IFormButtonProps {
    onClick: () => void;
}