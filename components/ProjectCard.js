import { useRouter } from "next/router";
import Image from "next/image";

import { BsArrowRightShort } from "react-icons/bs";
import Technologies from "./Technologies";

export default function ProjectCard({ projectName, projectDescription, technologies, href, githubLink, siteLink, img, altText }) {

    const router = useRouter();

    return (
        <article className="">
            <h3 onClick={() => router.push(`/projects/${href}`)} className="flex-none mb-2 text-3xl font-semibold group/item cursor-pointer hover:underline">
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
                <figcaption className="p-2 flex flex-col gap-1">
                    <p className="">
                        {projectDescription}
                        {/* <span className="text-neutral-300 inline-block lg:block ml-2 lg:m-0"> Click to here learn more...
                        </span> */}
                    </p>
                    <div className="flex items-center gap-2">
                        <h4 className="text-lg">Technologies</h4>
                        <Technologies techUsed={technologies} showNames={false}/>
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
        <a className="w-max pl-2 p-1 font-semibold rounded flex cursor-pointer border border-slate-100 hover:underline active:text-neutral-400" onClick={handleClick}>
            {title} <BsArrowRightShort className="inline-block align-middle text-2xl" />
        </a>
    )
}