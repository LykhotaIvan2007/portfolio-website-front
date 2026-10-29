import Button from "../../Ui/Button/Button.jsx";
import styles from './Header.module.scss'
import {useState, useEffect} from "react";


const Header = ()=> {
    const [active, setActive] = useState("#landing")

    const links = [
        { href: '#landing', label: 'Home' },
        { href: '#projects', label: 'Projects' },
    ]

    useEffect(() => {
        const sections = document.querySelectorAll(
            '#landing, #projects, #contact'
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(`#${entry.target.id}`);
                    }
                });
            },
            {
                rootMargin: '-20% 0px -60% 0px',
                threshold: 0,
            }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <header className={styles.header} id="top">
            <nav className={`${styles.nav} container`} aria-label="Main">
                <a className={styles.logo} href="#landing" aria-label="Ivan Lykhota — home">
                    <span className={styles.logoMark} aria-hidden="true">IL</span>
                    <span className={styles.logoName}>Ivan Lykhota</span>
                </a>


                <ul className={styles.navLinks} id="nav-links">
                    {links.map((link)=>{
                        return(
                            <li>
                                <a
                                    onClick={()=>setActive(link.href)}
                                    className={`${styles.navLink} ${active === link.href ? styles.active : ''}`}
                                    href={link.href}
                                    aria-current="true"
                                >
                                    {link.label}
                                </a>
                            </li>
                            )
                    })}
                </ul>

                <Button variant="secondary" atag={"#contact"}>Get in touch</Button>
            </nav>
        </header>
    )
}

export default Header