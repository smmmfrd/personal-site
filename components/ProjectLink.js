import { BsArrowRightShort } from "react-icons/bs";

export default function ProjectLink({ title, link }) {
    const handleClick = (e) => {
        e.stopPropagation();
        window.open(link, '_blank').focus();
    }

    return (
        <a className="w-max pl-2 p-1 font-semibold rounded flex cursor-pointer border border-slate-100 hover:underline active:text-neutral-400" onClick={handleClick}>
            {title} <BsArrowRightShort className="inline-block align-middle text-2xl" />
        </a>
    )
}