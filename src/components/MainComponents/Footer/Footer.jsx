import { useEffect, useRef } from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    const footerRef = useRef(null);

    useEffect(() => {
        const footer = footerRef.current;

        if (!footer) return;

        if (
            window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
            !('IntersectionObserver' in window)
        ) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                if (!entries[0].isIntersecting) return;

                footer.classList.add(styles.visible);
                observer.unobserve(footer);
            },
            {
                threshold: 0,
                rootMargin: '0px 0px -40px 0px',
            }
        );

        footer.classList.add(styles.pending);
        observer.observe(footer);

        return () => {
            observer.disconnect();
            footer.classList.remove(styles.pending, styles.visible);
        };
    }, []);

    return (
        <footer
            ref={footerRef}
            className={styles.footer}
            id="contact"
        >
            <div className={styles.container}>
                <div className={styles.footer__contact}>
                    <div className={styles.footer__details}>
                        <p className={`eyebrow ${styles.intro}`}>
                            02 / Contact
                        </p>

                        <h2 className={`h2 ${styles.heading}`}>
                            Let's make something
                            <br />
                            clear together.
                        </h2>

                        <a
                            className={styles.email}
                            href="mailto:ivan.lykhota2007@gmail.com"
                        >
                            <span
                                className="icon icon--mail"
                                aria-hidden="true"
                            />
                            ivan.lykhota2007@gmail.com
                        </a>

                        <p className={`mono-small ${styles.note}`}>
                            Say hello — I read every message
                        </p>
                    </div>

                    <div className={styles.footer__profiles}>
                        <p className="mono-small">Find me on</p>

                        <ul className={styles.profileLinks}>
                            <li>
                                <a
                                    className={styles.socialLink}
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LinkedIn
                                    <span
                                        className="icon icon--arrow-up-right"
                                        aria-hidden="true"
                                    />
                                    <span className={styles.visuallyHidden}>
                                        (opens in a new tab)
                                    </span>
                                </a>
                            </li>

                            <li>
                                <a
                                    className={styles.socialLink}
                                    href="https://github.com/LykhotaIvan2007"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                    <span
                                        className="icon icon--arrow-up-right"
                                        aria-hidden="true"
                                    />
                                    <span className={styles.visuallyHidden}>
                                        (opens in a new tab)
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.footer__legal}>
                    <p className="mono-small">© 2026 Ivan Lykhota</p>

                    <a className={styles.navLink} href="#landing">
                        Back to top ↑
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;