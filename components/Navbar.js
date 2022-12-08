import { useRouter } from "next/router";

export default function Navbar() {
    const router = useRouter();

    function handleClick() {
        router.push('/');
    }

    return (
        <header className="z-20 mb-2 border-b-4 p-3 sticky top-0 bg-cyan-500">
            <nav className="max-w-5xl mx-auto
                flex justify-between">
                <h1 className="text-2xl">Sam Mumford's Portfolio</h1>
                {router.pathname !== '/' && <button onClick={handleClick}>Home</button>}
            </nav>
        </header>
    );
}