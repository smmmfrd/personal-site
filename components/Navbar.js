import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();

    function handleClick(path) {
        router.push(`/${path}`);
    }

    return (
        <header className="z-20 mb-2 border-b-4 p-3 sticky top-0 bg-inherit">
            <nav className="max-w-5xl mx-auto
                flex justify-between">
                <h1 className="text-2xl">Sam Mumford's Portfolio</h1>
                <div className="flex gap-4">
                    {router.pathname !== '/' && <button onClick={() => handleClick('')}>Home</button>}
                    <button onClick={() => handleClick('#contact')}>Contact Me</button>
                    <button onClick={() => handleClick('#resume')}>Resume</button>
                </div>
            </nav>
        </header>
    );
}