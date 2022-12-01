export default function WheresWaldo() {
    return (
        <main className="lg:max-w-5xl w-5/6 my-4 mx-auto flex flex-col gap-4">
            <div className="p-6 rounded bg-blurredBg">
                <h1 className="text-4xl my-2">Where's Videogame Characters</h1>
                <p className="mb-4">A Where’s Waldo clone, but is functionally a quiz app without the correct answers on the client, done through checking attempts to a Firebase hosted database.</p>
                <section className="bg-blurredBg py-5 px-4 rounded">
                    <h3 className="text-3xl">Story</h3>
                    <p>An assignment for The Odin Project, but I realized where it could be improved, by not storing the correct answer in the client we were creating a much improved quiz app.</p>
                    <p>The “quiz” itself is actually a Where’s Waldo clone, where the player has to find specific characters in the images. Time is kept between starting and ending, and posted to a leaderboard, I have not implemented a leaderboard just yet.</p>
                </section>
                <section className="bg-blurredBg p-4 rounded">
                    <h3 className="text-3xl">Problems</h3>
                    <p>Modals are a pain when first starting, but this project showed me how far I’ve come. When someone mentioned to me they wanted to see what characters they were looking for before starting and checking them at any time while playing, I was able to quickly implement a modal that displayed the characters.</p>
                </section>
                <section className="bg-blurredBg p-4 rounded">
                    <h3 className="text-3xl">Future Plans</h3>
                    <p>Implementing a leaderboard is a deliverable for the assignment, and I am working on it right now. Originally I wasn’t going to include it because of moderating concerns, but after later seeing my fellow students were limiting players to only three characters in their name, like on arcade machines, in order to alleviate this issue.</p>
                    <p>Showing when a character has been found, like an outline around them, showing the player how much they have accomplished, is a common method of making a game feel better.</p>
                    <p>My game dev degree allows me to know what to do, but time and my own artistic skills prohibit what I can accomplish. If I really wanted to make this it’s own thing, I would get original art done with outlines of the characters. But pontificating these kinds of improvements does not get things done, something I really learned making games.</p>
                </section>
            </div>
        </main>
    )
}