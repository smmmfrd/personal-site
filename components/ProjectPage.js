import Image from "next/image";

export function Main({ children }) {
    return (
        <main className="lg:max-w-4xl w-5/6 my-4 mx-auto rounded bg-blurredBg p-6">
            {children}
        </main>
    )
}

export function Hero({ title, description }) {
    return (
        <header className="px-8 mb-8">
            <h1 className="text-4xl my-2">{title}</h1>
            <p className="">{description}</p>
        </header>
    )
}

export function Section({ title, children }) {
    return (
        <section className="bg-blurredBg w-full p-6 lg:pr-4 first-of-type:rounded-t last:rounded-b
        flex flex-col gap-3">
            <h3 className="text-3xl">{title}</h3>
            {children}
        </section>
    )
}

export function ProjectImage({ img }) {
    return (
        <div className="py-2">
            <Image
                className="rounded-lg mx-auto"
                src={img}
                width='480'
                height='288'
            />
        </div>
    );
}