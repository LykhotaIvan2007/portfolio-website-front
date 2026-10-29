import Button from '../../Ui/Button/Button.jsx';
import styles from './Home.module.scss';
import photo from '../../../assets/fotos/ivan-lykhota.jpg';

const Home = () => {
    return (
        <section
            className={styles.landing}
            id="landing"
            aria-labelledby="hero-title"
        >
            <div className={styles.container}>
                <div className={styles.hero}>
                    <div className={styles.heroIntro}>

                        <h1 className={styles.title} id="hero-title">
                            Hi, I'm <span className={styles.accent}>Ivan</span>.
                            <br />
                            I design clear,
                            <br />
                            human products.
                        </h1>

                        <p className={styles.lead}>
                            Student designer and developer focused on interfaces that
                            feel calm and obvious. I research, prototype and build —
                            from first sketch to working product.
                        </p>

                        <div className={styles.actions}>
                            <Button variant="primary" to="/documentation">
                                View University documentation
                                <span
                                    className={`${styles.icon} ${styles.arrowRight}`}
                                    aria-hidden="true"
                                />
                            </Button>
                        </div>
                    </div>

                    <figure className={styles.portrait}>
                        <div
                            className={styles.portraitGlow}
                            aria-hidden="true"
                        />

                        <div
                            className={styles.portraitFrame}
                            aria-hidden="true"
                        />

                        <img
                            className={styles.portraitPhoto}
                            src={photo}
                            width="440"
                            height="560"
                            alt="Portrait of Ivan Lykhota smiling"
                        />
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default Home;