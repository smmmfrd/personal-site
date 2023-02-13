import Head from "next/head";
import Image from "next/image";
import Technologies from "./Technologies";

export function Main({ children }) {
    return (
        <main className="w-[576px] my-4 mx-auto">
            {children}
        </main>
    )
}

export function Hero({ title, description, technologies }) {
    return (
        <header className="mb-8">
            <Head>
                <title>{`${title} | Sam Mumford's Portfolio`}</title>
                <meta name="description" content={`Sam Mumford's Portfolio, Page for ${title}`}/>
            </Head>
            <h2 className="text-4xl my-2">{title}</h2>
            <p className="">{description}</p>
            <h2 className="text-4xl mt-4 mb-2">Technologies Used:</h2>
            <Technologies techUsed={technologies} showNames={true} />
        </header>
    )
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