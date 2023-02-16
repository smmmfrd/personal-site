import * as ProjectPagePieces from "../../components/ProjectPagePieces";

import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

// Saving data
import fs from 'fs';
import project_data from "../../data/projects.json";

async function normalPaths() {
    const projectColRef = collection(db, "projects");
    const projectSnapshot = await getDocs(projectColRef);
    
    let paths = [];
    projectSnapshot.docs.forEach(doc => {
        paths.push({
            params: {
                id: doc.id
            }
        })
    });
    
    // const docsData = projectSnapshot.docs.map(doc => doc.data());
    // const projectsJSON = JSON.stringify(docsData);
    // fs.writeFileSync('data/projects.json', projectsJSON);
    
    return {
        paths,
        fallback: false
    }
}

async function readPaths() {
    let paths = project_data.map(project => ({
        params: {
            id: project.id
        }
    }));

    return {
        paths,
        fallback: false
    }
}

export async function getStaticPaths() {
    return readPaths();
}

async function normalProps(context) {
    const id = context.params.id;
    const docRef = doc(db, "projects", id);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();

    return {
        props: { project: data }
    }
}

async function readProps(context) {
    const id = context.params.id;
    const project = project_data.find(project => project.id === id);
    return {
        props: {project}
    }
}

export async function getStaticProps(context) {
    return readProps(context);
}

export default function ProjectPage({ project }) {
    return (
        <ProjectPagePieces.Main>
            <ProjectPagePieces.Hero
                title={project.title}
                {...project.header}
                // description={project.header.intro}
                // technologies={project.header.techUsed}
                // githubLink={project.header.githubLink}
                // liveLink={project.header.liveLink}
            />
            <ProjectPagePieces.Section title={'Story Behind'}>
                {project.storyBehind.map(BuildPiece)}
            </ProjectPagePieces.Section>

            <ProjectPagePieces.Section title={'Tech Used & Why'}>
                {project.techUsed.map(BuildPiece)}
            </ProjectPagePieces.Section>

            <ProjectPagePieces.Section title={'Problems'}>
                {project.problems.map(BuildPiece)}
            </ProjectPagePieces.Section>

            <ProjectPagePieces.Section title={'Future Plans'}>
                {project.futurePlans.map(BuildPiece)}
            </ProjectPagePieces.Section>
        </ProjectPagePieces.Main>
    )
}

function BuildPiece(piece) {
    if (piece.text !== undefined) {
        // It's a paragraph.
        return <p key={piece.key}>{piece.text}</p>
    } else {
        // It's an image.
        return <ProjectPagePieces.ProjectImage
            key={piece.key}
            img={piece.url}
            altText={piece.alt}
        />
    }
}