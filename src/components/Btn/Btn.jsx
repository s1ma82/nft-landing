import { Link } from 'react-router-dom'
import styles from './Btn.module.scss'

export default ({ onClick, href = false, children }) => {

    const Btn = () => (
        <button className={styles.btn}>
            <span className={styles.btn__text}>{children}</span> 
        </button>
    )
    const BtnLink = () => (
        <Link to={href} className={styles.btn}>
            <span className={styles.btn__text}>{children}</span> 
        </Link>
    )

    return href && !onClick ? <BtnLink/> : <Btn/>
}