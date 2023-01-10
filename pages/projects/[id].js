import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export async function getStaticPaths() {
    const projectColRef = collection(db, "projects");
    const projectSnapshot = await getDocs(projectColRef);

    let paths = [];
    projectSnapshot.docs.forEach(doc => {
        paths.push({
            params: {
                id: doc.id
            }
        })
    });

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;
    const docRef = doc(db, "projects", id);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();

    return {
        props: { project: data }
    }
}

export default function ProjectPage({project}) {
    return (
        <p>{project.title}</p>
    )
}