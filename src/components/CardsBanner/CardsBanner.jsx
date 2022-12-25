import { useEffect, useState } from 'react'
import styles from './CardsBanner.module.scss'
import BannerImgMain from '../../assets/BannerImgMain.svg'
import BannerImgBack from '../../assets/BannerImgBack.svg'
import BannerImgFront from '../../assets/BannerImgFront.svg'

export default () => {
    const [state, setState] = useState()
    useEffect(() => {
        async function request() {
            const res = await fetch('https://jsonplaceholder.typicode.com/photos')
            const data = (await res.json()).slice(0, 3)
            console.log(data)
            setState(data)
        }
        request()
    }, [])

    return state ? (
        <div className={styles.cards}>
            <img data-pos="1" className={styles.card} src={BannerImgMain} alt="picture"/>
            <img data-pos="2" className={styles.card} src={BannerImgBack} alt="picture"/>
            <img data-pos="3" className={styles.card} src={BannerImgFront} alt="picture"/>
        </div>
    ) : null
}