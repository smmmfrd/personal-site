import {useRouter} from "next/router";
import { useEffect } from "react";

export default function Navbar() {
    const router = useRouter();

    useEffect(() => {
        console.log(router.pathname);
    }, [])

    return (
        <header className="z-20 mb-2 border-b-4 p-3 sticky top-0 bg-cyan-500">
            <nav className="max-w-5xl mx-auto">
                <h1 className="text-2xl">Sam Mumford's Portfolio</h1>
            </nav>
        </header>
    );
}