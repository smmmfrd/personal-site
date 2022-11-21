import SocialLinks from "../components/SocialLinks";
import Image from "next/image";

export default function AboutMe() {
    return (
        <header className="w-11/12 mx-auto my-8 px-8 py-4 bg-blurredBg rounded-3xl
          flex gap-8 items-center">
            <div>
                <div className="float-left w-40 h-60 mr-4 relative shadow-2xl rounded-lg overflow-hidden">
                    <Image
                        src='/../public/pexels-laura-tancredi-7083927.jpg'
                        alt="Picture of me"
                        fill={true}
                    />
                </div>
                <h2 className="text-5xl mb-2">About Me</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quod quae qui adipisci provident?
                    Odit sunt maxime dolores temporibus officiis quis eveniet iste. Ex numquam quibusdam est sequi eveniet minus!</p>
                <SocialLinks />
            </div>
        </header>
    );
}