import SocialLinks from "./SocialLinks";

export default function Footer() {
    return (
        <footer className="absolute w-full bottom-0 pb-4 border-t-4 bg-blurredBg flex flex-col justify-center">
            <SocialLinks />
            <p className="text-center">Copyright @smmmfrd 2022</p>
        </footer>
    );
}