import Image from "next/image";
import SocialLinks from "../../components/SocialLinks";
import main_page from "../../data/main_page.json";

export function getStaticProps() {
    let data = main_page;
    delete data.featuredProjects;
    return {
        props: { data }
    }
}

export default function AboutPage({ data }) {
    return (
        <main className="w-full mx-auto flex flex-col gap-8 pb-16">
            <header className="mx-auto bg-blurredBg rounded-3xl flex gap-8 items-center">
                <div>
                    <div className="float-left w-64 h-64 mr-4 relative shadow-2xl rounded-lg overflow-hidden">
                        <Image
                            src={data.personalImage}
                            alt="Picture of me"
                            width="256"
                            height="256"
                        />
                    </div>
                    <h2 className="text-5xl my-2">Sam Mumford</h2>
                    <div className="text-neutral-100">
                        <p className="text-3xl">{data.personalTitle}</p>
                        <p className="my-2">{data.personalIntro}</p>
                    </div>
                    <SocialLinks
                        linkedInLink={data.personalLinkedinLink}
                        githubLink={data.personalGithubLink}
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