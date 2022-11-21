import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
    return (
        <div className="relative min-h-screen text-neutral-50
        bg-gradient-to-b from-cyan-500 to-blue-500">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}