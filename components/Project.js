import { BsArrowRightShort } from "react-icons/bs";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandFirebase } from "react-icons/tb";
import { SiReactrouter, SiWebpack, SiTailwindcss, SiVite, SiNextdotjs } from "react-icons/si"

export default function Project({ projectName, projectDescription, technologies, githubLink, siteLink }) {
    function findElement(techName) {
        switch (techName){
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
            py-4 px-6 lg:mx-3 my-4 flex flex-col gap-4">
            {/* TODO - Image Carousel */}
            <div className="flex-none w-full lg:h-40 h-52 bg-white m-auto" />
            <div className="flex-auto p-4
                flex flex-col justify-between gap-4">
                <h3 className="flex-none text-3xl">{projectName}</h3>
                <p>{projectDescription}</p>
                <div className="bg-blurredBg py-2 px-4 rounded-lg">
                    <h4 className="text-2xl mb-2">Technologies</h4>
                    <div className="flex gap-4">
                        <div className="w-full
                            flex flex-wrap content-start items-start gap-0.5">
                            {techElements}
                        </div>
                        <div className="w-max flex-none
                            flex flex-col justify-start items-end gap-2">
                            <a className="pl-2 p-1 font-semibold bg-black rounded text-right
                                flex cursor-pointer" href={githubLink}>
                                To Github Repo <BsArrowRightShort className="inline-block align-middle text-2xl" />
                            </a>
                            <a className="pl-2 p-1 font-semibold bg-black rounded text-right
                                flex cursor-pointer" href={siteLink}>
                                To Live Site <BsArrowRightShort className="inline-block align-middle text-2xl" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}