import { Logo, Btn, Link } from "../components"
import styles from './Header.module.scss'
export default () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <Logo/>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.nav__list}>
                    <li className={styles.nav__item}>
                        <Link router href="/drop">
                            Drop
                        </Link>
                    </li>
                    <li className={styles.nav__item}>
                        <Link router href="/marketplace">
                            Marketplace
                        </Link>
                    </li>
                    <li className={styles.nav__item}>
                        <Link href="#creator">
                            Creator
                        </Link>
                    </li>
                    <li className={styles.nav__item}>
                        <Link href="#community">
                            Community
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className={styles.header__container}>
                <Btn href="/contact">Contact Us</Btn>
            </div>
        </header>
    )
}