import { useEffect, useState } from 'react'
import styles from './CardsBanner.module.scss'

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
            <img data-pos="1" className={styles.card} src={state[0].url} alt="picture"/>
            <img data-pos="2" className={styles.card} src={state[1].url} alt="picture"/>
            <img data-pos="3" className={styles.card} src={state[2].url} alt="picture"/>
        </div>
    ) : null
}