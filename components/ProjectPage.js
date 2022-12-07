export function Main({ children }) {
    return (
        <main className="lg:max-w-5xl w-5/6 my-4 mx-auto rounded bg-blurredBg p-6">
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
        <section className="bg-blurredBg p-6 even:pl-32 odd:pr-32 first-of-type:rounded-t last:rounded-b
        flex flex-col gap-3">
            <h3 className="text-3xl">{title}</h3>
            {children}
        </section>
    )
}