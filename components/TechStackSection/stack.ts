import { ITechBoxProps as TechBoxProps } from "./IProps";
import { SiTypescript, SiJavascript, SiCsharp, SiPython, SiCplusplus, SiC, SiRuby, SiPostgresql } from "react-icons/si"
import { TbBrandVisualStudio } from "react-icons/tb"
import { SiReact, SiRubyonrails, SiDotnet, SiNextdotjs, SiJquery, SiHeroku, SiChakraui, SiTailwindcss, SiBootstrap } from "react-icons/si"
import { DiNodejs, } from "react-icons/di";
import { SiMicrosoftsqlserver, SiMysql, SiMongodb, SiCouchbase, SiIbm, SiMariadb } from "react-icons/si"

// acomodar e incluir los necesarios

export const langStack: Array<TechBoxProps> = [
    {
        backgroundColor: "#280068",
        color: "#E4DCF0",
        icon: SiCsharp,
        text: "CSharp",
        skills: ["Dependency Injection", "Generics", "Interoperability ", "Attributes", "Asynchrony", "Interfaces and Structs", "Classes and Abstraction", "Polymorphism", ".NET Framework 3 ... 4.8", ".NET Core 3 ... 6"]
    },
    {
        backgroundColor: "#3178c6",
        color: "white",
        icon: SiTypescript,
        text: "TypeScript",
        skills: ["Interfaces", "Classes and Abstraction", "Generics", "Modules", "TSX"]
    },
    {
        backgroundColor: "#F0DB4F",
        color: "#323330",
        icon: SiJavascript,
        text: "Javascript",
        skills: ["ES6", "Modules", "Async/Await", "DOM Manipulation"]
    },
    {
        backgroundColor: "#4B8BBE",
        color: "#FFD43B",
        icon: SiPython,
        text: "Python",
        skills: ["Fundamentals of the language", "OOP in python", "PiP", "Python as scripting language"]
    },
    {
        backgroundColor: "#CC342D",
        color: "white",
        icon: SiRuby,
        text: "Ruby",
        skills: ["Fundamentals of the language", "OOP in Ruby", "Formatting", "RVM", "RubyGems", "Sequel", "PrawnPDF", "Sinatra", "Jekyll"]
    },
    {
        backgroundColor: "#044F88",
        color: "#D5E4F3",
        icon: SiCplusplus,
        text: "C++",
        skills: ["OOP in C++", "The use of headers files in C++", "C++99"]
    },
    {
        backgroundColor: "#5E97D0",
        color: "#D5E4F3",
        icon: SiC,
        text: "C",
        skills: ["Pointers", "Basic command line programs", "Handling Files"]
    },
    {
        backgroundColor: "#0289a2",
        color: "#D5E4F3",
        icon: TbBrandVisualStudio,
        text: "Visual Basic",
        skills: ["VB.NET", "VB6", "VBA"]
    },
]

export const frameworkStack: Array<TechBoxProps> = [
    {
        backgroundColor: "#512bd4",
        color: "white",
        icon: SiDotnet,
        text: ".NET",
        skills: ["ASP.NET MVC", "Blazor", "WebForms", "Web Apis", "WinForms", "Xamarin"]
    },
    {
        backgroundColor: "#66cc33",
        color: "#333333",
        icon: DiNodejs,
        text: "NodeJS",
        skills: ["NPM", "Handling files", "OS manipulation", "Threads"]
    },
    {
        backgroundColor: "#CC342D",
        color: "white",
        icon: SiRubyonrails,
        text: "Ruby On Rails",
        skills: ["Routing", "ActiveRecord", "Template Usage", "I18N", "Deployment"]
    },
    {
        backgroundColor: "white",
        color: "#000000",
        icon: SiNextdotjs,
        text: "NextJS",
        skills: ["Routing", "SSR", "Static Generation", "Styled Components", "Deployment"]
    },
    {
        backgroundColor: "#20232a",
        color: "#61DBFB",
        icon: SiReact,
        text: "ReactJS",
        skills: ["How React DOM works", "Function components", "Composition", "Conditional Rendering", "Handling Events"]
    },
    {
        backgroundColor: "#20232a",
        color: "#61DBFB",
        icon: SiJquery,
        text: "JQuery",
        skills: ["AJAX", "Event Handling", "Extend functions"]
    },
    {
        backgroundColor: "#6610f2",
        color: "white",
        icon: SiBootstrap,
        text: "Bootstrap",
        skills: ["Extend with SASS", "Extend default components"]
    },
    {
        backgroundColor: "#29BEB0",
        color: "white",
        icon: SiChakraui,
        text: "ChakraUI",
        skills: ["Layout", "Custom Theme", "Extend default components", "Fonts"]
    },
    {
        backgroundColor: "#0ea5e9",
        color: "white",
        icon: SiTailwindcss,
        text: "TailwindCSS",
        skills: ["Responsive Design"]
    },
]

export const dbStack: Array<TechBoxProps> = [
    {
        backgroundColor: "red.500",
        color: "white",
        icon: SiMicrosoftsqlserver,
        text: "MSSQL",
        skills: ["Queries", "Store procedures", "Scalar Functions", "Triggers", "Rollbacks", "Jobs", "Normalization"]
    },
    {
        backgroundColor: "blue.400",
        color: "blue.700",
        icon: SiPostgresql,
        text: "PostgreSQL",
        skills: ["Queries", "Triggers", "Normalization"]
    },
    {
        backgroundColor: "#00758F",
        color: "#F29111",
        icon: SiMysql,
        text: "MySQL",
        skills: ["Queries", "Store procedures", "Triggers", "Normalization"]
    },
    {
        backgroundColor: "#1a3562",
        color: "white",
        icon: SiMariadb,
        text: "MariaDB",
        skills: ["Queries", "Triggers", "Normalization"]
    },
    {
        backgroundColor: "#1a3562",
        color: "white",
        icon: SiIbm,
        text: "IBM DB2",
        skills: ["Queries"]
    },
    {
        backgroundColor: "#3F3E42",
        color: "#3FA037",
        icon: SiMongodb,
        text: "MongoDB",
        skills: ["Queries"]
    },
    {
        backgroundColor: "red.500",
        color: "white",
        icon: SiCouchbase,
        text: "CouchBase",
        skills: ["Queries"]
    },
]
