import {Link} from '../'
import styles from './Logo.module.scss' 
export default () => {
    return (
        <Link href="/">
            <span className={styles.logo}>
                PhobiaNFT
            </span>
        </Link>
    )
}