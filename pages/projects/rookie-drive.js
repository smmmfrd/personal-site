export default function RookieDrive() {
    return (
        <main className="lg:max-w-5xl w-5/6 my-4 mx-auto flex flex-col gap-4">
            <div className="p-6 rounded bg-blurredBg">
                <h1 className="text-4xl my-2">Rookie Drive</h1>
                <p className="mb-4">A clone of Google Drive, but only with document types typically made by people learning how to code. Users can sign in and create, update, or delete their own documents, all handled through Firebase.</p>
                <section className="bg-blurredBg py-5 px-4 rounded">
                    <h3 className="text-3xl">Story</h3>
                    <p>The Odin Project’s final project for advanced Javascript is to make a clone of a site we use all the time. I chose to make Google Drive, because it is the site I’ve spent the longest time on. However, making the original document types from Drive is not something I can replicate easily, so I made all the documents into stuff I’ve previously made in a bunch of tutorials, and all synced to Firebase.</p>
                </section>
                <section className="bg-blurredBg p-4 rounded">
                    <h3 className="text-3xl">Problems</h3>
                    <p>Many problems arose because of me manually connecting to Firebase but eventually I learned the ecosystem, except I used a firebase-react-hook to simplify authorization/signing in. If I were to go back to this project, implementing more of these hooks would be paramount.</p>
                    <p>The documents themselves did not create a lot of problems, but creating new ones caused issues and I had to create a more advanced model. Specifically it was the meme generator and getting the meme image from the imgflip API, which had to be fetched on document creation so that the user would have an image on opening the document for the first time.</p>
                </section>
                <section className="bg-blurredBg p-4 rounded">
                    <h3 className="text-3xl">Future Plans</h3>
                    <p>Aside from implementing more firebase-react-hooks, I would include Tailwind CSS, as it’s improved how good my websites look dramatically and it was this project that convinced me that I need it.</p>
                    <p>This was a great learning experience, connecting my own front-end and back-end infrastructures, aside from the above features I don’t think anything else is necessary.
                    </p>
                </section>
            </div>
        </main>
    )
}