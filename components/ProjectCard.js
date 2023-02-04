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
                return <RiReactjsLine title="React" />;
            case "firebase":
                return <TbBrandFirebase title="Firebase" />;
            case "react-router":
                return <SiReactrouter title="React Router" />;
            case "webpack":
                return <SiWebpack title="Webpack" />;
            case "tailwind":
                return <SiTailwindcss title="Tailwind" />;
            case "vite":
                return <SiVite title="Vite" />;
            case "next":
                return <SiNextdotjs title="Next js" />;
            default:
                return;
        }
    }

    const techElements = technologies.map(tech => {
        return <div className="flex-none text-lg flex items-center gap-1" key={tech}>
            {findElement(tech)}</div>
    });

    return (
        <article className="group/item cursor-pointer" onClick={() => router.push(`/projects/${href}`)}>
            <h3 className="flex-none mb-0.5 text-2xl font-semibold group-hover/item:underline">
                {projectName}
                <span className="text-xl invisible group-hover/item:visible"> &rarr;</span>
            </h3>

            <div className="flex gap-2">
                <Image
                    className="m-auto rounded-lg"
                    style={{ width: "320px", height: "180px" }}
                    src={img}
                    alt={altText}
                    width='320'
                    height='180'
                />
                <figcaption className="flex flex-col gap-0.5 md:justify-center">
                    <p className="">
                        {projectDescription}
                        {/* <span className="text-neutral-300 inline-block lg:block ml-2 lg:m-0"> Click to here learn more...
                        </span> */}
                    </p>
                    <div className="flex items-center gap-2">
                        <h4 className="text-lg">Technologies</h4>
                        <div className="flex gap-4">
                            <div className="w-full flex flex-wrap content-start items-start gap-0.5">
                                {techElements}
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <LinkElement
                            title={'Source Code'}
                            link={githubLink}
                        />
                        <LinkElement
                            title={'Live Site'}
                            link={siteLink}
                        />
                    </div>
                </figcaption>
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
        <a className="group/link w-max pl-2 p-1 font-semibold bg-black rounded flex cursor-pointer border border-black hover:border-slate-100 active:text-neutral-400" onClick={handleClick}>
            {title} <BsArrowRightShort className="inline-block align-middle text-2xl" />
        </a>
    )
}