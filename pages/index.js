import Image from "next/image";
import profilePic from '../public/pexels-laura-tancredi-7083927.jpg';

import SocialLinks from "../components/SocialLinks";
import Project from "../components/Project";

export default function Home() {
  return (
    <main className="lg:max-w-5xl w-11/12 mx-auto flex flex-col">
      <AboutMe />
      <h2 className="bg-blurredBg w-min pt-4 px-4 text-6xl rounded-t-xl z-10">Projects</h2>
      <div className="bg-blurredBg pt-0 p-4 mb-8 rounded-xl rounded-tl-none
          grid lg:grid-cols-2 grid-cols-1">
        <Project
          projectName={"Rookie Drive"}
          projectDescription={"A clone of Google Drive, but only with document types typically made by people learning how to code. Users can sign in and create, update, or delete their own documents, all handled through Firebase."}
          technologies={["react", "firebase", "webpack"]}
          href={'rookie-drive'}
          githubLink={"#"}
          siteLink={"#"}
        />
        <Project
          projectName={"Battleship"}
          projectDescription={"Seeing React’s overall architecture reflected exactly how I like to make games, so making a game in React happened naturally."}
          technologies={["react", "tailwind", "react-router", "vite"]}
          href={'battleship'}
          githubLink={"#"}
          siteLink={"#"}
        />
        <Project
          projectName={"Personal Site"}
          projectDescription={"This site itself, made in Next.js and published through Netlify."}
          technologies={["react", "tailwind", "next"]}
          href={'personal-site'}
          githubLink={"#"}
          siteLink={"#"}
        />
        <Project
          projectName={"Where's Waldo App"}
          projectDescription={"A Where’s Waldo clone, but functionally is a quiz app without the correct answers stored on the client, done through checking attempts to a Firebase hosted database."}
          technologies={["react", "firebase", "webpack"]}
          href={'wheres-waldo'}
          githubLink={"#"}
          siteLink={"#"}
        />
      </div>
    </main>
  );
}

function AboutMe() {
  return (
    <header className="w-11/12 mx-auto my-8 px-8 py-4 bg-blurredBg rounded-3xl
        flex gap-8 items-center">
      <div>
        <div className="float-left w-40 h-60 mr-4 relative shadow-2xl rounded-lg overflow-hidden">
          <Image
            src={profilePic}
            alt="Picture of me"
            fill={true}
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