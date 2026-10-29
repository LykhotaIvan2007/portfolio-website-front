import styles from "./Project.module.scss";

const Project = (props) =>{

    const{
        project_id,
        image,
        title,
        content,
        tools,
    } = props

    return (
        <li id={project_id}>
            <a className={styles.projectCard}>
                <img
                    className={styles.image}
                    src={image}
                    alt="Portrait of Ivan Lykhota"
                />

                <div className={styles.projectCard__body}>

                    <h3 className={styles.h3}>{title}</h3>

                    <p className={styles.projectCard__desc}>
                        {content}
                    </p>

                    <ul className={styles.tags}>
                        {(tools ?? '')
                            .split(',')
                            .map(tool => tool.trim())
                            .filter(Boolean)
                            .map((tool, index) => (
                                <li
                                    key={`${project_id}-${index}`}
                                    className={styles.tag}
                                >
                                    {tool}
                                </li>
                            ))}
                    </ul>
                </div>
            </a>
        </li>
    )
}

export default Project