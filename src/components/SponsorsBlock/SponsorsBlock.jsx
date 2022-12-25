import {Link} from '../'
import styles from './SponsorsBlock.module.scss'
export default ({data}) => {
    return (
        <div className={styles.sponsors}>
            {data?.map(sponsor => (
                <div className={styles.sponsor}>
                    <Link href={sponsor.url}>
                        {sponsor.icon
                            ? <img className={styles.icon} src={sponsor.icon} alt={`${sponsor.name} icon`} />
                            : null
                        }
                    </Link>
                </div>
            ))}
        </div>
    )
}