import styles from './StatsBanner.module.scss'
export default ({ data }) => {
    
    return (
        <div className={styles.stats}>
            {data.map(stats => (
                <div className={styles.stats__block}>
                    <span className={styles.name}>{stats.name}</span>
                    <span className={styles.value}>{stats.value}</span>
                </div>
            ))}
        </div>
    )
}