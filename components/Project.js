import { BsArrowRightShort } from "react-icons/bs";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandFirebase } from "react-icons/tb";
import { SiReactrouter, SiWebpack, SiTailwindcss, SiVite, SiNextdotjs } from "react-icons/si";
import { useRouter } from "next/router";
import Image from "next/image";


export default function Project({ projectName, projectDescription, technologies, href, githubLink, siteLink, img }) {

    const router = useRouter();

    function findElement(techName) {
        switch (techName) {
            case "react":
                return <RiReactjsLine />;
            case "firebase":
                return <TbBrandFirebase />;
            case "react-router":
                return <SiReactrouter />;
            case "webpack":
                return <SiWebpack />;
            case "tailwind":
                return <SiTailwindcss />;
            case "vite":
                return <SiVite />;
            case "next":
                return <SiNextdotjs />;
            default:
                return;
        }
    }

    const techElements = technologies.map(tech => {
        return <div className="px-1 bg-black flex-none text-lg border-2 rounded-sm 
            flex items-center gap-1" key={tech}>
            {findElement(tech)} {tech}</div>
    });

    return (
        <article className="bg-blurredBg drop-shadow-xl rounded-lg
            py-2 px-3 lg:mx-3 my-4 flex flex-col">
            <div className="flex-auto py-2
                flex flex-col justify-between gap-4">
                <header className="cursor-pointer group bg-blurredBg pt-2 p-4 rounded-lg flex flex-col gap-2 my-auto relative"
                    onClick={() => router.push(`/projects/${href}`)}>
                    <Image 
                        className="mx-auto rounded-lg"
                        src={img}
                        width='480'
                        height='288'
                    />
                    <figcaption>
                        <h3 className="flex-none text-5xl text-center group-hover:underline">
                            {projectName}
                            <span className="text-4xl invisible group-hover:visible">&rarr;</span>
                        </h3>
                        <p className="px-4">
                            {projectDescription}
                            <span className="text-neutral-300 inline-block lg:block ml-2 lg:m-0"> Click to here learn more...
                            </span>
                        </p>
                    </figcaption>
                </header>
                <div className="bg-blurredBg py-2 px-4 rounded-lg">
                    <h4 className="text-2xl mb-2">Technologies</h4>
                    <div className="flex gap-4">
                        <div className="w-full
                            flex flex-wrap content-start items-start gap-0.5">
                            {techElements}
                        </div>
                        <div className="w-max flex-none
                            flex flex-col justify-start items-end gap-2">
                            <LinkElement
                                title={'To Github Repo'}
                                link={githubLink}
                            />
                            <LinkElement
                                title={'To Live Site'}
                                link={siteLink}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

function LinkElement({ title, link }) {
    const handleClick = (e) => {
        e.stopPropagation();
        window.open(link, '_blank').focus();
    }

    return (
        <a className="pl-2 p-1 font-semibold bg-black rounded text-right flex cursor-pointer" onClick={handleClick}>
            {title} <BsArrowRightShort className="inline-block align-middle text-2xl" />
        </a>
    )
}