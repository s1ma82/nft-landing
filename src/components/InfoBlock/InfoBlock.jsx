import {Title} from '..'
import styles from './InfoBlock.module.scss'
export default ({ data, person = false }) => {
    return !person ? (
        <div className={styles.banner}>
            {data.img}
            <Title>{data.title}</Title>
            <p className={styles.description}>{data.description}</p>
        </div>
    ) : (
        <div className={`${styles.banner}`}>
            <img src={data.img} alt={`${data.name} avatar`} />
            <div className={styles.info}>
                <Title>{data.name}</Title>
                <span className={styles.stats}>{data.stats}</span>
            </div>    
        </div>
    )
    
}