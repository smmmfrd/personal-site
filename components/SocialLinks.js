import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function SocialLinks() {
    return (
        <div className="flex gap-6 m-auto p-2 items-center">
            <a href="http://google.com" target="_blank" rel="noopener noreferrer"
                className="text-4xl cursor-pointer block">
                <BsGithub />
            </a>
            <a href="http://google.com" target="_blank" rel="noopener noreferrer"
                className="text-4xl cursor-pointer block">
                <BsLinkedin />
            </a>
        </div>
    )
}