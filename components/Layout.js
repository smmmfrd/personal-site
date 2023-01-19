import Head from "next/head";
import { useEffect, useRef } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {

    const returnToTopButton = useRef();

    useEffect(() => {
        handleScroll();
        window.onscroll = function () { handleScroll() };
    }, []);

    function handleScroll() {
        if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
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
        <div className="relative min-h-screen text-neutral-50
        bg-gradient-to-b from-cyan-500 to-blue-500">
            <Head>
                <title>Sam Mumford's Portfolio</title>
                <meta name="author" content="Sam Mumford"/>
                <meta name="description" content="Sam Mumford's Portfolio Home Page"/>
                <meta name="keywords" content="Portfolio" />
            </Head>
            {/* <button ref={returnToTopButton} onClick={handleTop} className="pt-1 p-2 bg-black border-2 border-slate-400 rounded fixed bottom-5 right-5 z-20">Back to Top <span className="text-xl">&uarr;</span></button> */}
            <button ref={returnToTopButton} onClick={handleTop} className="pt-1 pb-2 px-3 bg-black border-2 border-slate-100 rounded fixed bottom-5 right-5 z-20 text-2xl">&uarr;</button>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}