import { useEffect, useRef } from 'react';
import styles from './Project.module.scss';

const Project = (props) => {
    const {
        project_id,
        image,
        title,
        content,
        tools,
    } = props;

    const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;

        if (!card) return;

        if (
            window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
            !('IntersectionObserver' in window)
        ) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];

                if (!entry.isIntersecting) return;

                card.classList.add(styles.visible);
                observer.unobserve(card);
            },
            {
                threshold: 0,
                rootMargin: '0px 0px -40px 0px',
            }
        );

        card.classList.add(styles.pending);
        observer.observe(card);

        return () => {
            observer.disconnect();
            card.classList.remove(styles.pending, styles.visible);
        };
    }, []);

    return (
        <li
            ref={cardRef}
            className={styles.projectItem}
            id={String(project_id)}
        >
            <article className={styles.projectCard}>
                <img
                    className={styles.image}
                    src={image}
                    alt={`Preview of ${title}`}
                />

                <div className={styles.projectCard__body}>
                    <h3 className={styles.h3}>
                        {title}
                    </h3>

                    <p className={styles.projectCard__desc}>
                        {content}
                    </p>

                    <ul className={styles.tags}>
                        {(tools ?? '')
                            .split(',')
                            .map((tool) => tool.trim())
                            .filter(Boolean)
                            .map((tool, index) => (
                                <li
                                    key={`${project_id}-${index}`}
                                    className={styles.tag}
                                    style={{
                                        '--tag-delay': `${
                                            450 + Math.min(index, 8) * 70
                                        }ms`,
                                    }}
                                >
                                    {tool}
                                </li>
                            ))}
                    </ul>
                </div>
            </article>
        </li>
    );
};

export default Project;