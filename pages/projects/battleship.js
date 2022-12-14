import * as ProjectPage from "../../components/ProjectPage";

import battlePlayer from "../../public/project_pics/battleship_player_board.png"
import battleEnd from "../../public/project_pics/battleship_game-end.png"

export default function Battleship() {
    return (
        <ProjectPage.Main>
            <ProjectPage.Hero
                title={'Battleship'}
                description={'Seeing React\'s overall architecture reflected exactly how I like to make games, so making a game in React happened naturally.'}
            />
            <ProjectPage.Section title={'Story'}>
                <p>The Odin Project has its students make Battleship in plain Javascript as a learning project, but I kept thinking about how I could do it better once I learned more and more. So I redid it in React, implementing every improvement and additions that were stuck in my head for weeks.</p>
                <ProjectPage.ProjectImage
                    img={battlePlayer}
                    altText={'A player board being built.'}
                />
                <p>These improvements are things like utilizing React's structure to make the project's layout easier to understand, improvements to AI's ship placing, Tailwind making the project not look horrific, and different board sizes and AI difficulties.</p>
            </ProjectPage.Section>
            <ProjectPage.Section title={'Tech Used & Why'}>
                <p>The first time I saw how React worked I fell in love, as it is exactly how I was taught and prefer to build games, but in making websites.</p>
                <p>Tailwind is my preferred CSS library, as it has preset stylings to help my poor taste but does not take away full control like Bootstrap, and I can still use my CSS knowledge.</p>
            </ProjectPage.Section>
            <ProjectPage.Section title={'Problems'}>
                <p>The Enemy Ship Placements, figuring out an algorithm to place each ship correctly was something I had never considered before doing this project, and was my favorite part once I figured my own way to do it, which is not the best, but it's mine.</p>
                <ProjectPage.ProjectImage
                    img={battleEnd}
                    altText={'The end screen of a game.'}
                />
                <p>The Player Ship Placements is a wholly different beast. Displaying the current ship under the cursor is not difficult, but showing when the ship's length and responsively showing when it is not correct took some elbow grease. Since I decided that rotating your ship is done on a keypress, much later I realized it had to update the validity of your ship's placement as well, and was a difficult challenge to fix.</p>
                <p>Someone testing the game mentioned they wanted to see their ships in a more detailed way. Displaying ships themselves is a hard task in the browser, and in my first implementation I had a single div crossing over gap spaces, which is much more difficult to do than just marking certain grid squares like how my current implementation does. Ironically, the first implementation is superior, because that div can just be given an image, and I will likely have to implement that again in the future.</p>
            </ProjectPage.Section>
            <ProjectPage.Section title={'Future Plans'}>
                <p>Ship pictures would be a quick way to dramatically improve how good this app looks, but would also be difficult to find images I could legally use. In general this game could do with a massively improved look, but just like my personal site I am happy not going overboard with the details.</p>
                <p>Additional options, like showing enemy ships when sunk, which is how we play it in my family, is actually against the rules, but options like it and some other assistive ones would be a nice thing to have in the game.</p>
                <p>A tutorial on how to play Battleship is something a proper app would have, but this is not an official game and is just a silly little project for a silly little guy.</p>
            </ProjectPage.Section>
        </ProjectPage.Main>
    )
}