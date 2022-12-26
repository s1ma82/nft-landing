import {Btn, CardsBanner, StatsBlock} from '../'
import styles from './BigBanner.module.scss'

export default ({children, description}) => {
    return (
        <div className={styles.banner}>
            <div className={styles.content}>
                <span className={styles.title}>
                    {children}
                </span>
                <dir className={styles.description}>
                    <Btn href="#discoverNft" style="circle">Discover NFT</Btn>
                    <span className={styles.text}>
                        {description}
                    </span>
                </dir>
                <div>
                    <StatsBlock/>
                </div>
            </div>
            <div className={styles.cards}>
                <CardsBanner/>
            </div>
        </div>
    )
}