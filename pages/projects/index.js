import ProjectCard from "../../components/ProjectCard";
import main_page from "../../data/main_page.json";

export function getStaticProps() {
    return {
        props: { projects: main_page.featuredProjects }
    }
}

export default function Projects({ projects }) {
    return (
        <main className="w-full mx-auto flex flex-col gap-8 pb-16">
            <h2 className="text-3xl underline font-bold">Projects</h2>
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