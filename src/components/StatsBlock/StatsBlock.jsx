import styles from './StatsBlock.module.scss'
export default ({ data }) => {
    
    return (
        <div className={styles.stats}>
            {data?.map((stats, i) => (
                <div className={styles.stats__block} key={`${stats.name}:${stats.value}#i`}>
                    <span className={styles.name}>{stats.name}</span>
                    <span className={styles.value}>{stats.value}</span>
                </div>
            ))}
        </div>
    )
}