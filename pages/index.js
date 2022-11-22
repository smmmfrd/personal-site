import SocialLinks from "../components/SocialLinks";
import Image from "next/image";
import profilePic from '../public/pexels-laura-tancredi-7083927.jpg';

export default function Home() {
  return (
    <>
      <main className="lg:max-w-5xl w-11/12 mx-auto flex flex-col">
        <AboutMe />
        <h2 className="bg-blurredBg w-min p-4 text-6xl rounded-t-xl">Projects</h2>
      </main>
    </>
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