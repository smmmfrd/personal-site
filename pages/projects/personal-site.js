export default function PersonalSite() {
    return (
        <main className="lg:max-w-5xl w-5/6 my-4 mx-auto flex flex-col gap-4">
            <div className="p-6 rounded bg-blurredBg">
                <h1 className="text-4xl my-2">My Personal Site</h1>
                <p className="mb-4">A statically generated site from Next.js, serving as my portfolio.</p>
                <section className="bg-blurredBg py-5 px-4 rounded">
                    <h3 className="text-3xl">Tech Used & Why</h3>
                    <p>Next.js to generate a static site, using React as the templating language, is the first step to learning it. As I learn more with Next, this site will continue to improve.</p>
                </section>
                <section className="bg-blurredBg p-4 rounded">
                    <h3 className="text-3xl">Problems</h3>
                    <p>I couldn’t find or figure out a way to convert what I write in plaintext on a document to go through an API into a truly dynamic site that updates when I write, but that’s ok. Manually writing out each document allows me to make changes when I need to, like custom stylings or even interactive things.</p>
                    <p>This being my first project not being hosted on github pages, finding a hosting platform is also a nightmare, after trying three others out, Netlify does everything I need in a simple package.</p>
                </section>
                <section className="bg-blurredBg p-4 rounded">
                    <h3 className="text-3xl">Future Plans</h3>
                    <p>Including more social media links, I have a very small presence online, but supposedly that is a problem with me and not this project. I grew up when social media was becoming a thing, but raised to be wary of posting things online, and while my peers figured out how to get around this dilemma, I never did.</p>
                    <p>Most junior devs will include some cool styling, interactivity, animations, or whatever to make their site stand out. Mine is super subtle, but I know I can go even further, and while it would be cool to do something that blows people’s minds, I prefer to keep everything fast and quickly accessible.</p>
                    <p>A blog section, if I can come up with a few more things to write about…</p>
                </section>
            </div>
        </main>
    )
}