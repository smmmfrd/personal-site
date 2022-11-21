import SocialLinks from "../components/SocialLinks";

export default function Home() {
  return (
    <>
      <header className="w-11/12 mx-auto my-8 px-8 py-4 bg-blurredBg rounded-3xl
          flex gap-8 items-center">
        <div>
          <h2 className="text-5xl mb-2">About Me</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quod quae qui adipisci provident?
            Odit sunt maxime dolores temporibus officiis quis eveniet iste. Ex numquam quibusdam est sequi eveniet minus!</p>
          <SocialLinks />
        </div>
      </header>
    </>
  );
}
