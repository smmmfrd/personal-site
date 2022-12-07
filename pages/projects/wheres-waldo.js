import * as ProjectPage from "../../components/ProjectPage";

import waldoMain from "../../public/project_pics/wheres_waldo_main.png"
import waldoChars from "../../public/project_pics/wheres_waldo_char-screen.png"

export default function WheresWaldo() {
    return (
        <ProjectPage.Main>
            <ProjectPage.Hero
                title={'Where\'s Videogame Characters'}
                description={'A Where\'s Waldo clone, but is functionally a quiz app without the correct answers on the client, done through checking attempts to a Firebase hosted database.'}
            />
            <ProjectPage.Section title={'Story'}>
                <p>An assignment for The Odin Project, but I realized where it could be improved, by not storing the correct answer in the client we were creating a much improved quiz app.</p>
                <ProjectPage.ProjectImage
                    img={waldoMain}
                    altText={'The main screen where the player can choose which level and the difficulty of each.'}
                />
                <p>The “quiz” itself is actually a Where's Waldo clone, where the player has to find specific characters in the images. Time is kept between starting and ending, and posted to a leaderboard, I have not implemented a leaderboard just yet.</p>
            </ProjectPage.Section>
            <ProjectPage.Section title={'Problems'}>
                <p>Modals are a pain when first starting, but this project showed me how far I've come. When someone mentioned to me they wanted to see what characters they were looking for before starting and checking them at any time while playing, I was able to quickly implement a modal that displayed the characters.</p>
                <ProjectPage.ProjectImage
                    img={waldoChars}
                    altText={'The beginning screen of a game of Where\'s Waldo in my project'}
                />
            </ProjectPage.Section>
            <ProjectPage.Section title={'Future Plans'}>
                <p>Implementing a leaderboard is a deliverable for the assignment, and I am working on it right now. Originally I wasn't going to include it because of moderating concerns, but after later seeing my fellow students were limiting players to only three characters in their name, like on arcade machines, in order to alleviate this issue.</p>
                <p>Showing when a character has been found, like an outline around them, showing the player how much they have accomplished, is a common method of making a game feel better.</p>
                <p>My game dev degree allows me to know what to do, but time and my own artistic skills prohibit what I can accomplish. If I really wanted to make this it's own thing, I would get original art done with outlines of the characters. But pontificating these kinds of improvements does not get things done, something I really learned making games.</p>
            </ProjectPage.Section>
        </ProjectPage.Main>
    )
}