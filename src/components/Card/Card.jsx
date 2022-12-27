import styles from './Card.module.scss'
import {Link, Timer} from '../'
const Price = ({ currency, children }) => {
    switch (currency) {
        case 'eth':
            return (
                <div className={`
                    ${styles.price}
                    ${styles.prive_eth}
                `}>
                    <img src="/ETH.png" alt='eth logo'/>
                    <span className={styles.value}>{children} ETH</span>
                </div>
            )
    }
}
export default ({ data }) => {
    const {title, price, currency, available, id} = data
    return (
        <div className={styles.card}>
            <img className={styles.img} src="" alt="card picture" />
            <div className={styles.content}>
                <h1 className={styles.title}>{title}</h1>
                <div className={styles.marketInfo}>
                    <Price currency={currency}>{price}</Price>
                    <span className={styles.available}>{available}</span>
                </div>
                <div className={styles.footer}>
                    <Link href={`#${id}`}>Place a bid</Link>
                </div>
            </div>
        </div>
    )
}