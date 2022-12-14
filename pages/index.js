import Image from "next/image";

import SocialLinks from "../components/SocialLinks";
import ProjectCard from "../components/ProjectCard";

import profilePic from '../public/pic-of-me-cropped.jpg';
import rookieDrivePic from '../public/project_pics/rookie_drive_main.png';
import battleShipPic from '../public/project_pics/battleship_game-end.png';
import personalSitePic from '../public/project_pics/personal_site_projects.png';
import wheresWaldoPic from '../public/project_pics/wheres_waldo_char-screen.png';
import ContactMe from "../components/ContactMe";

function AboutMe() {
  return (
    <header className="w-11/12 mx-auto px-8 py-4 bg-blurredBg rounded-3xl
        flex gap-8 items-center">
      <div>
        <div className="float-left w-64 h-64 mr-4 relative shadow-2xl rounded-lg overflow-hidden">
          <Image
            src={profilePic}
            alt="Picture of me"
          />
        </div>
        <h2 className="text-5xl my-2">About Me</h2>
        <p className="my-2">I have a typical backstory of a game programmer who discovers web development and learns to enjoy web development a lot more. The Odin Project, Scrimba, and FreeCodeCamp have been instrumental for taking what I learned at college to make games and applying those principles to web development.</p>
        <p className="my-2">I have a personal passion for accessibility, simple & fast designs, and love for making things.</p>
        <SocialLinks />
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <main className="lg:max-w-5xl sm:w-11/12 w-full mx-auto flex flex-col gap-8">
      <AboutMe />
      <section>
        <h2 className="bg-blurredBg w-min pt-4 px-4 text-6xl rounded-t-xl z-10">Projects</h2>
        <div className="bg-blurredBg pt-0 sm:p-4 p-1 mb-8 rounded-xl rounded-tl-none
            grid lg:grid-cols-2 grid-cols-1">
          <ProjectCard
            projectName={"Rookie Drive"}
            projectDescription={"A clone of Google Drive, but only with document types typically made by people learning how to code. Users can sign in and create, update, or delete their own documents, all handled through Firebase."}
            technologies={["react", "firebase", "webpack"]}
            href={'rookie-drive'}
            githubLink={"https://github.com/smmmfrd/rookie-drive"}
            siteLink={"https://aesthetic-crisp-943a41.netlify.app/"}
            img={rookieDrivePic}
            altText={'The landing page of my Rookie Drive project, with example documents.'}
          />
          <ProjectCard
            projectName={"Battleship"}
            projectDescription={"Seeing React's overall architecture reflected exactly how I like to make games, so making a game in React happened naturally."}
            technologies={["react", "tailwind", "react-router", "vite"]}
            href={'battleship'}
            githubLink={"https://github.com/smmmfrd/battleship-react"}
            siteLink={"https://velvety-moxie-6a1467.netlify.app/"}
            img={battleShipPic}
            altText={'The end screen of a game of Battleship in my project.'}
          />
          <ProjectCard
            projectName={"Personal Site"}
            projectDescription={"This site itself, made in Next.js and published through Netlify."}
            technologies={["react", "tailwind", "next"]}
            href={'personal-site'}
            githubLink={"https://github.com/smmmfrd/personal-site"}
            siteLink={"#"}
            img={personalSitePic}
            altText={'The Projects section of my personal site.'}
          />
          <ProjectCard
            projectName={"Where's Waldo App"}
            projectDescription={"A Where's Waldo clone, but functionally is a quiz app without the correct answers stored on the client, done through checking attempts to a Firebase hosted database."}
            technologies={["react", "firebase", "webpack"]}
            href={'wheres-waldo'}
            githubLink={"https://github.com/smmmfrd/wheres-waldo-app"}
            siteLink={"https://willowy-cascaron-acaae3.netlify.app/"}
            img={wheresWaldoPic}
            altText={'The beginning screen of a game of Where\'s Waldo in my project'}
          />
        </div>
      </section>
      <ContactMe />
    </main>
  );
}