import {Btn, CardsBanner} from '../'
import styles from './BigBanner.module.scss'

export default ({children, description}) => {
    return (
        <div className={styles.banner}>
            <div className={styles.content}>
                <span className={styles.title}>
                    {children}
                </span>
                <dir className={styles.description}>
                    <Btn href="#discoverNft" style="sircle">Discover NFT</Btn>
                    <span className={styles.text}>
                        {description}
                    </span>
                </dir>
            </div>
            <div className={styles.cards}>
                <CardsBanner/>
            </div>
        </div>
    )
}