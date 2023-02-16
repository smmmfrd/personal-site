import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import ProjectCard from "../../components/ProjectCard";
import main_page from "../../data/main_page.json";

async function normalProps() {
    const mainPageDocRef = doc(db, "main page", "main");
    const mainPageDocSnapshot = await getDoc(mainPageDocRef);

    let mainPage = mainPageDocSnapshot.data();
    // const mainPageJSON = JSON.stringify(mainPage);
    // fs.writeFileSync('data/main_page.json', mainPageJSON);

    return {
        props: { projects: mainPage.featuredProjects }
    }
}

async function readProps() {
    return {
        props: { projects: main_page.featuredProjects }
    }
}

export async function getStaticProps() {
    return readProps();
}

export default function Projects({ projects }) {
    return (
        <main className="w-full mx-auto flex flex-col gap-8 pb-16">
            <h2 className="text-5xl font-bold">Projects</h2>
            {projects.map((project) =>
                <ProjectCard
                    key={project.id}
                    projectName={project.title}
                    projectDescription={project.intro}
                    technologies={project.techUsed}
                    href={`${project.id}`}
                    githubLink={project.githubLink}
                    siteLink={project.liveLink}
                    img={project.image}
                    altText={`${project.title}'s introduction`}
                />
            )}
        </main>
    );
}