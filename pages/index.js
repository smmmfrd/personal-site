import { useEffect } from "react";

import { db } from "../firebase";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import Image from "next/image";

import SocialLinks from "../components/SocialLinks";
import ProjectCard from "../components/ProjectCard";
import ContactMe from "../components/ContactMe";

// async function getProjects() {
//   const projectColRef = collection(db, "projects");
//   const projectSnapshot = await getDocs(projectColRef);

//   let docs = [];
//   projectSnapshot.docs.forEach(doc => {
//     let data = doc.data();
//     docs.push({
//       ...data.header,
//       title: data.title,
//       id: doc.id
//     })
//   });

//   return docs;
// }

export async function getStaticProps() {
  const mainPageDocRef = doc(db, "main page", "main");
  const mainPageDocSnapshot = await getDoc(mainPageDocRef);

  let mainPage = mainPageDocSnapshot.data();
  return {
    props: {  mainPage }
  }
}

export default function Home({ mainPage }) {
  return (
    <main className="lg:max-w-5xl sm:w-11/12 w-full mx-auto my-4 flex flex-col gap-8">
      <AboutMe 
        personalImage={mainPage.personalImage}
        personalIntro={mainPage.personalIntro}
        personalResume={mainPage.personalResume}
        personalGithubLink={mainPage.personalGithubLink}
        personalLinkedinLink={mainPage.personalLinkedinLink}
      />
      <section>
        <h2 className="bg-blurredBg sm:w-max w-min pt-4 px-4 text-6xl rounded-t-xl z-10">Featured Projects</h2>
        <div className="bg-blurredBg pt-0 sm:p-4 p-1 rounded-xl rounded-tl-none
            grid lg:grid-cols-2 grid-cols-1">
          {mainPage.featuredProjects.map((project) => <ProjectCard
            key={project.id}
            projectName={project.title}
            projectDescription={project.intro}
            technologies={project.techUsed}
            href={`${project.id}`}
            githubLink={project.githubLink}
            siteLink={project.liveLink}
            img={project.image}
            altText={''}
          />)}
        </div>
      </section>
      <ExtraStuffs personalResume={mainPage.personalResume}/>
      <ContactMe />
    </main>
  );
}

function AboutMe({ personalImage, personalIntro, personalGithubLink, personalLinkedinLink }) {

  return (
    <header className="w-11/12 mx-auto px-8 py-4 bg-blurredBg rounded-3xl flex gap-8 items-center">
      <div>
        <div className="float-left w-64 h-64 mr-4 relative shadow-2xl rounded-lg overflow-hidden">
          <Image
            src={personalImage}
            // loader={() => personalImage}
            alt="Picture of me"
            width="256"
            height="256"
          />
        </div>
        <h2 className="text-5xl my-2">About Me</h2>
        <p className="my-2">{personalIntro}</p>
        <SocialLinks
          linkedInLink={personalLinkedinLink}
          githubLink={personalGithubLink}
        />
      </div>
    </header>
  );
}

function ExtraStuffs({ personalResume }) {
  return (
    <section className="sm:w-5/6 w-full rounded-2xl mx-auto">
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
        className="block w-fit mt-4 mx-auto text-2xl bg-blurredBg p-2 rounded-sm hover:underline hover:bg-foggedBg">Download My Resume!</a>
    </section>
  );
}