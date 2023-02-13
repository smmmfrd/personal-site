import { RiReactjsLine } from "react-icons/ri";
import { TbBrandFirebase } from "react-icons/tb";
import { SiReactrouter, SiWebpack, SiTailwindcss, SiVite, SiNextdotjs } from "react-icons/si";

export default function Technologies({ techUsed, showNames }) {
    function findElementImage(techName) {
        switch (techName) {
            case "react":
                return <RiReactjsLine title="React" />;
            case "firebase":
                return <TbBrandFirebase title="Firebase" />;
            case "react-router":
                return <SiReactrouter title="React Router" />;
            case "webpack":
                return <SiWebpack title="Webpack" />;
            case "tailwind":
                return <SiTailwindcss title="Tailwind" />;
            case "vite":
                return <SiVite title="Vite" />;
            case "next":
                return <SiNextdotjs title="Next js" />;
            default:
                return;
        }
    }

    function techWithName(techName) {
        return (
            <>{findElementImage(techName)} {techName.charAt(0).toUpperCase() + techName.slice(1)}</>
        );
    }

    const techElements = techUsed.map(tech =>
        <div className={`${showNames ? "text-2xl" : "text-lg"} flex items-center gap-1`} key={tech}>
            {showNames ? techWithName(tech) : findElementImage(tech)}
        </div>
    );

    return (
        <div className={`w-full flex flex-wrap content-start items-start ${showNames ? "gap-4" : "gap-0.5"}`}>
            {techElements}
        </div>
    );
}