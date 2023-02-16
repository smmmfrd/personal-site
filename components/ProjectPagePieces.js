import Head from "next/head";
import Image from "next/image";
import ProjectLink from "./ProjectLink";
import Technologies from "./Technologies";

export function Main({ children }) {
    return (
        <main className="max-w-[576px] my-4 mx-auto">
            {children}
        </main>
    )
}

export function Hero({ title, intro, techUsed, githubLink, liveLink, image }) {
    return (
        <header className="mb-8">
            <Head>
                <title>{`${title} | Sam Mumford's Portfolio`}</title>
                <meta name="description" content={`Sam Mumford's Portfolio, Page for ${title}`} />
            </Head>
            <Image
                className="rounded-lg mx-auto"
                src={image}
                alt={`${title}`}
                width='480'
                height='270'
            />
            <h2 className="text-5xl font-bold my-2">{title}</h2>
            <p className="">{intro}</p>
            <h2 className="text-4xl mt-4 mb-2">Technologies Used:</h2>
            <Technologies techUsed={techUsed} showNames={true} />
            <div className="flex gap-4 mt-8">
                <ProjectLink
                    title={'Source Code'}
                    link={githubLink}
                />
                <ProjectLink
                    title={'Live Site'}
                    link={liveLink}
                />
            </div>
        </header>
    );
}

export function Section({ title, children }) {
    return (
        <section className="flex flex-col gap-3 mt-4">
            <h2 className="text-3xl">{title}</h2>
            {children}
        </section>
    )
}

export function ProjectImage({ img, altText }) {
    return (
        <div className="py-2">
            <Image
                className="rounded-lg mx-auto"
                src={img}
                alt={altText}
                width='480'
                height='270'
            />
        </div>
    );
}