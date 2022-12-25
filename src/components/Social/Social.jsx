import {Link} from "../"
import styles from './Social.module.scss'
export default ({name, href}) => {
    return (
        <Link href={href}>
            <div className={styles.social}>
                <img className={styles.social} src={`/icons/socials/${name}.svg`} alt="" />
            </div>
        </Link>
    )
}