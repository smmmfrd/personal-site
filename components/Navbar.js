import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();

    function handleClick(path) {
        router.push(`/${path}`);
    }

    return (
        <header className="z-20 mx-auto mb-2 py-3 top-0 bg-inherit">
            <nav className="mx-auto flex justify-between text-xl">
                <h1 className="font-bold">Sam Mumford</h1>
                <div className="flex gap-4">
                    {router.pathname !== '/' && <button onClick={() => handleClick('')}>Home</button>}
                    {router.pathname !== '/projects' && <button onClick={() => handleClick('projects')}>Projects</button>}
                    {router.pathname !== '/profile' && <button onClick={() => handleClick('profile')}>Profile</button>}
                    {/* <button onClick={() => handleClick('#contact')}>Contact Me</button>
                    <button onClick={() => handleClick('#resume')}>Resume</button>
                    <button>&equiv;</button> */}
                </div>
            </nav>
        </header>
    );
}