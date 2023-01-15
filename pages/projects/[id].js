import * as ProjectPagePieces from "../../components/ProjectPagePieces";

import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export async function getStaticPaths() {
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

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const docRef = doc(db, "projects", id);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();

    return {
        props: { project: data }
    }
}

export default function ProjectPage({ project }) {
    return (
        <ProjectPagePieces.Main>
            <ProjectPagePieces.Hero
                title={project.title}
                description={project.header.intro}
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