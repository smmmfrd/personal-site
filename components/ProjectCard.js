import { BsArrowRightShort } from "react-icons/bs";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandFirebase } from "react-icons/tb";
import { SiReactrouter, SiWebpack, SiTailwindcss, SiVite, SiNextdotjs } from "react-icons/si";
import { useRouter } from "next/router";
import Image from "next/image";


export default function ProjectCard({ projectName, projectDescription, technologies, href, githubLink, siteLink, img, altText }) {

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
            py-2 sm:px-1 px-1 lg:mx-3 my-4 flex flex-col">
            <div className="py-2 flex-grow 
                flex flex-col justify-between gap-4">
                <header className="h-full cursor-pointer group pt-2 p-4 rounded-lg flex md:flex-row md:justify-between flex-col gap-2 my-auto relative"
                    onClick={() => router.push(`/projects/${href}`)}>
                    <Image
                        className="md:m-0 mx-auto rounded-lg"
                        style={{width: "480px", height: "270px"}}
                        src={img}
                        alt={altText}
                        width='480'
                        height='270'
                    />
                    <figcaption className="flex flex-col gap-2 md:text-right">
                        <h3 className="flex-none text-5xl md:text-right text-center group-hover:underline">
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
                {/* TECH & LINKS */}
                <div className=" py-2 px-8 rounded-lg">
                    <h4 className="text-2xl mb-2">Technologies</h4>
                    <div className="flex gap-4">
                        <div className="w-full
                            flex flex-wrap content-start items-start gap-0.5">
                            {techElements}
                        </div>
                        <div className="w-max flex-none
                            flex flex-col justify-start items-end gap-2">
                            <LinkElement
                                title={'To Source Code'}
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
        <a className="pl-2 p-1 font-semibold bg-black rounded text-right flex cursor-pointer border border-black hover:border-slate-100 active:text-neutral-400" onClick={handleClick}>
            {title} <BsArrowRightShort className="inline-block align-middle text-2xl" />
        </a>
    )
}