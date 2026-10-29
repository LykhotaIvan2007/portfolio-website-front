import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer} id="contact">
            <div className={styles.container}>
                <div className={styles.footer__contact}>
                    <div className={styles.footer__details}>
                        <p className="eyebrow">03 / Contact</p>
                        <h2 className="h2">Let's make something<br/>clear together.</h2>
                        <a className={styles.email} href="mailto:ivan.lykhota@student.nhlstenden.com"><span className="icon icon--mail"
                                                                                  aria-hidden="true"></span>ivan.lykhota@student.nhlstenden.com</a>
                        <p className="mono-small">Say hello — I read every message</p>
                    </div>
                    <div className={styles.footer__profiles}>
                        <p className="mono-small">Find me on</p>
                        <ul className={styles.profileLinks}>
                            <li><a className={styles.socialLink} href="https://www.linkedin.com/" target="_blank"
                                   rel="noopener">LinkedIn <span className="icon icon--arrow-up-right"
                                                                 aria-hidden="true"></span><span
                                className={styles.visuallyHidden}>(opens in a new tab)</span></a></li>
                            <li><a className={styles.socialLink} href="https://github.com/LykhotaIvan2007" target="_blank"
                                   rel="noopener">GitHub <span className="icon icon--arrow-up-right"
                                                               aria-hidden="true"></span><span
                                className={styles.visuallyHidden}>(opens in a new tab)</span></a></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.footer__legal}>
                    <p className="mono-small">© 2026 Ivan Lykhota</p>
                    <a className={styles.navLink} href="#landing">Back to top ↑</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer