import { useRouter } from "next/router";
import Image from "next/image";

import Technologies from "./Technologies";
import ProjectLink from "./ProjectLink";

export default function ProjectCard({ projectName, projectDescription, technologies, href, githubLink, siteLink, img, altText }) {

    const router = useRouter();

    return (
        <article className="">
            <h3 onClick={() => router.push(`/projects/${href}`)} className="flex-none mb-2 text-3xl font-semibold group/item cursor-pointer hover:underline">
                {projectName}
                <span className="text-xl invisible group-hover/item:visible"> &rarr;</span>
            </h3>

            <div className="flex sm:flex-row flex-col gap-2">
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
                    </p>
                    <div className="flex items-center gap-2">
                        <h4 className="text-lg">Technologies</h4>
                        <Technologies techUsed={technologies} showNames={false} />
                    </div>
                    <div className="flex gap-2">
                        <ProjectLink
                            title={'Source Code'}
                            link={githubLink}
                        />
                        <ProjectLink
                            title={'Live Site'}
                            link={siteLink}
                        />
                    </div>
                </figcaption>
            </div>
        </article>
    );
}