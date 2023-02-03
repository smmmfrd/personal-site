import Head from "next/head";
import { useEffect, useRef } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const SPACE_FROM_TOP = 300;

export default function Layout({ children }) {
    const returnToTopButton = useRef();

    useEffect(() => {
        handleScroll();
        window.onscroll = function () { handleScroll() };
    }, []);

    function handleScroll() {
        if(document.body.scrollTop > SPACE_FROM_TOP || document.documentElement.scrollTop > SPACE_FROM_TOP) {
            returnToTopButton.current.style.display = 'block';
        } else {
            returnToTopButton.current.style.display = 'none';
        }
    }

    function handleTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <div className="min-w-full min-h-screen text-neutral-50 bg-cool-gray [&>*]:max-w-2xl">
            <Head>
                <title>Sam Mumford - Front End Web Developer</title>
                <meta name="author" content="Sam Mumford"/>
                <meta name="description" content="Sam Mumford's Portfolio Home Page"/>
                <meta name="keywords" content="Portfolio" />
                <link rel="shortcut icon" href="/open-arm-fill.svg" sizes="any" type="image/svg+xml" />
            </Head>
            <button ref={returnToTopButton} onClick={handleTop} className="pt-1 pb-2 px-3 bg-black border-2 border-slate-100 rounded fixed bottom-5 right-5 z-20 text-2xl">&uarr;</button>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}