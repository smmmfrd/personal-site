import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function SocialLinks({ linkedInLink, githubLink }) {
    return (
        <div className="flex gap-6 m-auto p-2 items-center">
            <a href={linkedInLink} target="_blank" rel="noopener noreferrer"
                className="text-4xl cursor-pointer block">
                <BsLinkedin />
            </a>
            <a href={githubLink} target="_blank" rel="noopener noreferrer"
                className="text-4xl cursor-pointer block">
                <BsGithub />
            </a>
        </div>
    )
}