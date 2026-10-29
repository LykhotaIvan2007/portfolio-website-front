import styles from './Technologies.module.scss';

const technologies = [
    'Java',
    'JavaScript',
    'Python',
    'React',
    'Django',
    'HTML',
    'CSS / SCSS',
    'PostgreSQL',
    'Docker',
    'Git',
    'Android Studio',
];

const Technologies = () => {
    return (
        <section
            className={styles.technologies}
            aria-labelledby="technologies-title"
        >
            <div className={styles.container}>
                <p className={styles.eyebrow}>My toolkit</p>

                <h2 className={styles.title} id="technologies-title">
                    Languages & Technologies
                </h2>

                <p className={styles.description}>
                    Languages, frameworks and tools I have worked with.
                </p>

                <ul className={styles.list}>
                    {technologies.map((technology) => (
                        <li className={styles.tag} key={technology}>
                            {technology}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Technologies;