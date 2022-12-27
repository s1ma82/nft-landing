import { Link } from 'react-router-dom'
import styles from './Btn.module.scss'

export default ({ onClick, href = false, children, className }) => {

    const Btn = () => (
        <button className={`${styles.btn} ${className}`} onClick={onClick}>
            <span className={styles.btn__text}>{children}</span> 
        </button>
    )
    const BtnLink = () => (
        <Link to={href} className={`${styles.btn} ${className}`}>
            <span className={styles.btn__text}>{children}</span> 
        </Link>
    )

    return href && !onClick ? <BtnLink/> : <Btn/>
}