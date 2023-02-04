import Head from "next/head";
import Image from "next/image";

export function Main({ children }) {
    return (
        <main className="w-full my-4 mx-auto">
            {children}
        </main>
    )
}

export function Hero({ title, description }) {
    return (
        <header className="mb-8">
            <Head>
                <title>{`${title} | Sam Mumford's Portfolio`}</title>
                <meta name="description" content={`Sam Mumford's Portfolio, Page for ${title}`}/>
            </Head>
            <h1 className="text-4xl my-2">{title}</h1>
            <p className="">{description}</p>
        </header>
    )
}

export function Section({ title, children }) {
    return (
        <section className="flex flex-col gap-3">
            <h3 className="text-3xl">{title}</h3>
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