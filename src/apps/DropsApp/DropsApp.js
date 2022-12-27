import { useEffect, useState } from 'react'
import { Btn, Card, Title } from '../../components'
import cards from './cards'
import styles from './DropsApp.module.scss'
export default ({ title = 'Title' }) => {
    const [load, setLoad] = useState(true)
    const [data, setData] = useState({})

    useEffect(() => {   
        if(!load) return
        if (data.cards) {
            const state = { ...data }
            state.cards = [...data.cards, ...cards]
            setData(state)
            setLoad(false)
            return
        }
        const state = { ...data }
        state.cards = cards
        setData(state)
        setLoad(false)
    }, [load, setLoad])
    
    return (
        <div className={styles.drops}>
            <Title>{title}</Title>
            <ul className={styles.drops__nav}>
                <li><Btn>Hope Ape</Btn></li>
                <li><Btn>Abstract</Btn></li>
                <li><Btn>Monkey</Btn></li>
                <li><Btn>Cars</Btn></li>
                <li><Btn>Art</Btn></li>
            </ul>
            <ul className={styles.drops__cards}>
                {data?.cards?.map((card, i) => (
                    <li key={card.title + '#' + card.id + i}>
                        <Card data={card}/>
                    </li>
                ))}
            </ul>
            <Btn className={styles.btn} onClick={() => setLoad(true)}>Load more</Btn>
        </div>
    )
}