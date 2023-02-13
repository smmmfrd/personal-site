import { RiReactjsLine } from "react-icons/ri";
import { TbBrandFirebase } from "react-icons/tb";
import { SiReactrouter, SiWebpack, SiTailwindcss, SiVite, SiNextdotjs } from "react-icons/si";

export default function Technologies({ techUsed, showNames }) {
    function findElement(techName) {
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

    const techElements = techUsed.map(tech => {
        return <div className="flex-none text-lg flex items-center gap-1" key={tech}>
            {findElement(tech)}</div>
    });

    return (
        <div className="flex gap-4">
            <div className="w-full flex flex-wrap content-start items-start gap-0.5">
                {techElements}
            </div>
        </div>
    );
}