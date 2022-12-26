import {Container, Link, Logo, Social, Title } from '../components'
import styles from './Footer.module.scss'

export default () => {
    const socials = [
        {name: 'twitter', href: '#'},
        {name: 'linkedin', href: '#'},
        {name: 'facebook', href: '#'},
        {name: 'github', href: '#'},
        {name: 'dribbble', href: '#'},
    ]
    return (
        <footer className={styles.footer}>
            <Container className={styles.content}>
                <div className={styles.info}>
                    <Logo />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <div className={styles.socials}>
                        {socials?.map((social, i) => <Social
                            key={social.name + '#' + i}
                            {...social}
                        />)}
                    </div>
                    </div>
                <div className={styles.navGrid}>
                    <div className={styles.item}>
                        <Title>Marketplace</Title>
                        <Link router href="#">Buy Product</Link>
                        <Link router href="#">Sell Product</Link>
                        <Link router href="#">Our Creator</Link>
                    </div>
                    <div className={styles.item}>
                        <Title>Resources</Title>
                        <Link router href="#">About Us</Link>
                        <Link router href="#">Event</Link>
                        <Link router href="#">Tutorial</Link>
                    </div>
                    <div className={styles.item}>
                        <Title>Company</Title>
                        <Link router href="#">Media</Link>
                        <Link router href="#">Blog</Link>
                        <Link router href="#">Pricing</Link>
                    </div>
                    <div className={styles.item}>
                        <Title>Legal</Title>
                        <Link router href="#">Terms</Link>
                        <Link router href="#">Privacy</Link>
                        <Link router href="#">Support</Link>
                    </div>
                </div>
            </Container>
            <div className={styles.terms}>© 2077 ApolloNFT. All rights reserved.</div>
        </footer>
    )
}