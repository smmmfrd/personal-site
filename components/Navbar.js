import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();

    function handleClick(path) {
        router.push(`/${path}`);
    }

    return (
        <header className="z-20 mx-auto mb-2 p-3 top-0 bg-inherit">
            <nav className="mx-auto flex justify-between">
                <h1 className="text-2xl">Sam Mumford</h1>
                <div className="flex gap-4">
                    {router.pathname !== '/' && <button onClick={() => handleClick('')}>Home</button>}
                    {router.pathname !== '/projects' && <button onClick={() => handleClick('projects')}>Projects</button>}
                    {/* <button onClick={() => handleClick('#contact')}>Contact Me</button>
                    <button onClick={() => handleClick('#resume')}>Resume</button>
                    <button>&equiv;</button> */}
                </div>
            </nav>
        </header>
    );
}