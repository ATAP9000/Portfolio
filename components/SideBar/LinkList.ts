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
        text: "Personal Skills",
        href: "#personal-skill"
    },
    {
        icon: RiStackLine,
        text: "Tech Stack",
        href: "#tech-stack"
    },
    {
        icon: AiOutlineInfoCircle,
        text: "About Me",
        href: "#about-me"
    },
    {
        icon: FaCertificate,
        text: "Certificates",
        href: "#certificates"
    },
    {
        icon: MdEmail,
        text: "Contact Me",
        href: "#contact-me"
    }
]