import { IProps as IContactBoxProps } from "./IProps";
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
  } from 'react-icons/md';

export const contact: Array<IContactBoxProps> = [
    {
        icon: MdPhone,
        text: "+58 424-109-76-74"
    },
    {
        icon: MdEmail,
        text: "ATAP9000@outlook.com"
    },
    {
        icon: MdLocationOn,
        text: "Caracas, Venezuela"
    }
];