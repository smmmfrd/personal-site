import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function SocialLinks({ linkedInLink, githubLink }) {
    return (
        <div className={`p-2 text-lg flex gap-6 items-center sm:justify-start justify-center`}>
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