import { useEffect, useRef } from 'react';
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
    'Flask',
];

const Technologies = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const elements = section.querySelectorAll('[data-reveal]');

        // Без анимаций, если пользователь уменьшил движение
        // или браузер не поддерживает IntersectionObserver.
        if (
            window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
            !('IntersectionObserver' in window)
        ) {
            return;
        }


        /*
            Переменная	Что содержит
            elements	    Все DOM-элементы, выбранные через querySelectorAll
            entries	        Массив записей, которые браузер передал в этот вызов
            entry	        Одну запись с информацией о пересечении
            entry.target	Сам DOM-элемент, который ранее передали в observe()



            entry                    // Объект с информацией
            entry.target             // Сам DOM-элемент
            entry.isIntersecting     // Пересекается ли элемент с областью наблюдения
            entry.intersectionRatio  // Какая доля элемента пересекается: 0.5 = 50%
        */
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            Number(a.target.dataset.order) -
                            Number(b.target.dataset.order)
                    );

                visibleEntries.forEach((entry, index) => {
                    const element = entry.target;

                    // Небольшая очередь для элементов,
                    // одновременно попавших на экран.
                    element.style.setProperty(
                        '--reveal-delay',
                        `${Math.min(index, 5) * 80}ms`
                    );

                    element.classList.add(styles.visible);

                    // Больше не наблюдаем: повторного запуска не будет.
                    observer.unobserve(element);
                });
            },
            {
                threshold: 0.15,
            }
        );

        elements.forEach((element) => {
            element.classList.add(styles.pending);
            observer.observe(element);
        });

        return () => {
            observer.disconnect();

            elements.forEach((element) => {
                element.classList.remove(styles.pending, styles.visible);
                element.style.removeProperty('--reveal-delay');
            });
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className={styles.technologies}
            aria-labelledby="technologies-title"
        >
            <div className={styles.container}>
                <p
                    className={`${styles.eyebrow} ${styles.revealText}`}
                    data-reveal
                    data-order={0}
                >
                    My toolkit
                </p>

                <h2
                    className={`${styles.title} ${styles.revealText}`}
                    id="technologies-title"
                    data-reveal
                    data-order={1}
                >
                    Languages & Technologies
                </h2>

                <p
                    className={`${styles.description} ${styles.revealText}`}
                    data-reveal
                    data-order={2}
                >
                    Languages, frameworks and tools I have worked with.
                </p>

                <ul className={styles.list}>
                    {technologies.map((technology, index) => (
                        <li
                            className={styles.tag}
                            key={technology}
                            data-reveal
                            data-order={index + 3}
                        >
                            {technology}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Technologies;