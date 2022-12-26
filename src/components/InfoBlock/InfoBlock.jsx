import {Title} from '..'
import styles from './InfoBlock.module.scss'
export default ({ data, person = false }) => {
    return !person ? (
        <div className={styles.block}>
            <img className={styles.img} src={`/icons/${data.name}.svg`} alt={data.name + " icon"} />
            <Title>{data.title}</Title>
            <p className={styles.description}>{data.description}</p>
        </div>
    ) : (
        <div className={`${styles.block} ${styles.block_person}`}>
            <img className={styles.img} src={data.img ? data.img : '/blank-profile-picture.png'} alt={`${data.name} avatar`} />
            <div className={styles.info}>
                <Title>{data.title}</Title>
                <span className={styles.stats}>{data.stats}</span>
            </div>    
        </div>
    )
    
}