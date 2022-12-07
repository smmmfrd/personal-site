import * as ProjectPage from "../../components/ProjectPage";

import driveStart from "../../public/project_pics/rookie_drive_main.png"
import driveNote from "../../public/project_pics/rookie_drive_note.png"

export default function RookieDrive() {
    return (
        <ProjectPage.Main>
            <ProjectPage.Hero
                title={'Rookie Drive'}
                description={'A clone of Google Drive, but only with document types typically made by people learning how to code. Users can sign in and create, update, or delete their own documents, all handled through Firebase.'}
            />
            <ProjectPage.Section title={'Story'}>
                <p>The Odin Project's final project for advanced Javascript is to make a clone of a site we use all the time. I chose to make Google Drive, because it is the site I've spent the longest time on. However, making the original document types from Drive is not something I can replicate easily, so I made all the documents into stuff I've previously made in a bunch of tutorials, and all synced to Firebase.</p>
                <ProjectPage.ProjectImage
                    img={driveStart}
                    altText={'The landing page, with example documents.'}
                />
            </ProjectPage.Section>
            <ProjectPage.Section title={'Problems'}>
                <p>Many problems arose because of me manually connecting to Firebase but eventually I learned the ecosystem, except I used a firebase-react-hook to simplify authorization/signing in. If I were to go back to this project, implementing more of these hooks would be paramount.</p>
                <ProjectPage.ProjectImage
                    img={driveNote}
                    altText={'The example of the note type document'}
                />
                <p>The documents themselves did not create a lot of problems, but creating new ones caused issues and I had to create a more advanced model. Specifically it was the meme generator and getting the meme image from the imgflip API, which had to be fetched on document creation so that the user would have an image on opening the document for the first time.</p>
            </ProjectPage.Section>
            <ProjectPage.Section title={'Future Plans'}>
                <p>Aside from implementing more firebase-react-hooks, I would include Tailwind CSS, as it's improved how good my websites look dramatically and it was this project that convinced me that I need it.</p>
                <p>This was a great learning experience, connecting my own front-end and back-end infrastructures, aside from the above features I don't think anything else is necessary.
                </p>
            </ProjectPage.Section>
        </ProjectPage.Main>
    )
}