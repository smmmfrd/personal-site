import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";

import SocialLinks from "../components/SocialLinks";
import ProjectCard from "../components/ProjectCard";
import ContactMe from "../components/ContactMe";

// Saving data
import fs from 'fs';
import main_page from "../data/main_page.json";

async function normalProps() {
    const mainPageDocRef = doc(db, "main page", "main");
    const mainPageDocSnapshot = await getDoc(mainPageDocRef);

    let mainPage = mainPageDocSnapshot.data();
    // const mainPageJSON = JSON.stringify(mainPage);
    // fs.writeFileSync('data/main_page.json', mainPageJSON);

    return {
        props: { mainPage }
    }
}

async function readProps() {
    const data = main_page;
    return {
        props: { mainPage: data }
    }
}

export async function getStaticProps() {
    return readProps();
}

export default function Home({ mainPage }) {
    return (
        <main className="w-full mx-auto flex flex-col gap-8 pb-16">
            <AboutMe
                personalImage={mainPage.personalImage}
                personalTitle={mainPage.personalTitle}
                personalIntro={mainPage.personalIntro}
                personalResume={mainPage.personalResume}
                personalGithubLink={mainPage.personalGithubLink}
                personalLinkedinLink={mainPage.personalLinkedinLink}
            />
            <section>
                <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
                <div className="flex flex-col gap-4">
                    {/* grid lg:grid-cols-2 grid-cols-1"> */}
                    {mainPage.featuredProjects.map((project) =>
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
                </div>
            </section>
            {/* <ExtraStuffs personalResume={mainPage.personalResume} />
            <ContactMe /> */}
        </main>
    );
}

function AboutMe({ personalImage, personalTitle, personalIntro, personalGithubLink, personalLinkedinLink }) {
    return (
        <h2>Under Construction</h2>
    );
}

function ExtraStuffs({ personalResume }) {
    return (
        <section id="resume" className="sm:w-5/6 w-full rounded-2xl mx-auto">
            <h2 className="bg-blurredBg w-max pt-4 px-4 text-4xl rounded-t-xl z-10">Certifications & Resume</h2>
            <div className="bg-blurredBg p-8 grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-2">
                <a className="text-left bg-blurredBg py-2 px-6 rounded-xl hover:underline group w-max mr-auto" href="https://www.freecodecamp.org/fcc3ac490a1-bcd9-403e-853e-f6bd62977d3a" target="_blank" rel="noopener noreferrer">
                    {/* <h3 className="text-2xl">FreeCodeCamp<span className="text-4xl invisible group-hover:visible">&rarr;</span></h3> */}
                    <h3 className="text-2xl">FreeCodeCamp &rarr;</h3>
                    <p>Responsive Web Design</p>
                    <p>Javascript Algorithms and Data Structures</p>
                </a>
                <a className="text-right bg-blurredBg py-2 px-3 rounded-xl hover:underline group w-max ml-auto" href="https://university.mongodb.com/course_completion/bea8d98c-a8a3-4fe6-bc55-7c439d2d2577?utm_source=copy&utm_medium=social&utm_campaign=university_social_sharing" target="_blank" rel="noopener noreferrer">
                    {/* <h3 className="text-2xl"><span className="text-4xl invisible group-hover:visible">&rarr;</span>MongoDB</h3> */}
                    <h3 className="text-2xl">MongoDB &rarr;</h3>
                    <p>M001: MongoDB Basics</p>
                </a>
            </div>
            <a href={personalResume} download
                className="block w-fit mt-4 mx-auto text-4xl bg-blurredBg p-2 rounded-sm hover:underline hover:bg-foggedBg">Download My Resume!</a>
        </section>
    );
}