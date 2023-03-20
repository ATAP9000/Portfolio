import { ILink as ISideBarLinkProps } from "../Links/IProps";
import { AiOutlineHome, AiOutlineInfoCircle } from "react-icons/ai"
import { MdWork, MdEmail } from "react-icons/md";
import { RiStackLine } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";
import { FaCertificate } from "react-icons/fa"

export const links: Array<ISideBarLinkProps> = [
    {
        icon: AiOutlineHome,
        text: "Home",
        href: "#"
    },
    {
        icon: GiSkills,
        text: "Skills",
        href: "#personal-skill"
    },
    {
        icon: RiStackLine,
        text: "Stack",
        href: "#tech-stack"
    },
    {
        icon: AiOutlineInfoCircle,
        text: "About",
        href: "#about-me"
    },
    {
        icon: FaCertificate,
        text: "Certificates",
        href: "#certificates"
    },
    {
        icon: MdEmail,
        text: "Contact",
        href: "#contact-me"
    }
]