import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import SocialLinks from "../../components/SocialLinks";
import main_page from "../../data/main_page.json";

async function normalProps() {
    const mainPageDocRef = doc(db, "main page", "main");
    const mainPageDocSnapshot = await getDoc(mainPageDocRef);

    let mainPage = mainPageDocSnapshot.data();
    delete mainPage.featuredProjects

    return {
        props: { mainPage }
    }
}

async function readProps() {
    let mainPage = main_page;
    delete mainPage.featuredProjects

    return {
        props: { mainPage }
    }
}

export async function getStaticProps() {
    return readProps();
}

export default function AboutPage({ mainPage }) {
    return (
        <main className="w-full mx-auto flex flex-col gap-8 pb-16">
            <header className="mx-auto bg-blurredBg rounded-3xl flex gap-8 items-center">
                <div>
                    <div className="float-left w-64 h-64 mr-4 relative shadow-2xl rounded-lg overflow-hidden">
                        <Image
                            src={mainPage.personalImage}
                            alt="Picture of me"
                            width="256"
                            height="256"
                        />
                    </div>
                    <h2 className="text-5xl my-2">Sam Mumford</h2>
                    <div className="text-neutral-100">
                        <p className="text-3xl">{mainPage.personalTitle}</p>
                        <p className="my-2">{mainPage.personalIntro}</p>
                    </div>
                    <SocialLinks
                        linkedInLink={mainPage.personalLinkedinLink}
                        githubLink={mainPage.personalGithubLink}
                    />
                </div>
            </header>
            <hr/>
            <section>
                <h3 className="text-3xl">Work Experience</h3>
            </section>
        </main>
    );
}