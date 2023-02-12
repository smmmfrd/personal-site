import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function SocialLinks({ linkedInLink, githubLink }) {
    return (
        <div className="flex gap-6 p-2 items-center text-lg">
            <Link link={linkedInLink}>
                <BsLinkedin /> Linkedin
            </Link>
            <Link link={githubLink}>
                <BsGithub /> Github
            </Link>
        </div>
    )
}

function Link({ children, link }) {
    return (<a href={link} target="_blank" rel="noopener noreferrer"
        className="text-xl cursor-pointer hover:underline flex gap-1.5 items-center">
        {children}
    </a>);
}