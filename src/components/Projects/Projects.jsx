import styles from './Projects.module.scss';
import {useEffect, useState} from "react";
import Project from "../Project/Project.jsx";


const Projects = () => {
    const [projects, setProjects] = useState([])

    const retreiveData = async ()=>{

        try{
            const response = await fetch('http://localhost:8000/api/getprojects/')

            if (!response.ok) {
                throw new Error("Upload failed");
            }

            const data = await response.json()

            setProjects(data)


        }catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        retreiveData()

    }, []);


    return (
        <section
            className={styles.projects}
            id="projects"
            aria-labelledby="projects-title"
        >
            <div className={styles.container}>
                <header className={styles.sectionHeader}>
                    <div>
                        <p className={styles.eyebrow}>
                            01 / Selected work
                        </p>

                        <h2 className={styles.h2} id="projects-title">
                            Projects
                        </h2>
                    </div>

                    <p className={styles.sectionHeader}>
                        A few things I have researched, designed and built.
                    </p>
                </header>

                <ul className={styles.projectGrid}>
                    {/* Project 1 */}
                    {projects.map((project) => {
                        return (
                            <Project
                                project_id={project.id}
                                image={project.image}
                                title={project.title}
                                content={project.content}
                                tools={project.tools}
                            />
                            )
                    })}
                </ul>
            </div>
        </section>
    );
};

export default Projects;