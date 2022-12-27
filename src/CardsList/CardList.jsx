import React from 'react'
import { Card } from '../components'
import styles from './CardList.module.scss'

export const CardList = () => {

    const data = [
        {title: 'ArtCrypto', price: 25, id: 1, currency: 'ETH', available: '1 of 32'},
        {title: 'ArtCrypto', price: 25, id: 2, currency: 'ETH', available: '1 of 32'},
        {title: 'ArtCrypto', price: 25, id: 3, currency: 'ETH', available: '1 of 32'},
        {title: 'ArtCrypto', price: 25, id: 4, currency: 'ETH', available: '1 of 32'},
        {title: 'ArtCrypto', price: 25, id: 5, currency: 'ETH', available: '1 of 32'},
        {title: 'ArtCrypto', price: 25, id: 6, currency: 'ETH', available: '1 of 32'},
        {title: 'ArtCrypto', price: 25, id: 7, currency: 'ETH', available: '1 of 32'},
        {title: 'ArtCrypto', price: 25, id: 8, currency: 'ETH', available: '1 of 32'},
    ]


  return (
    <>
    <h1 className={styles.title}>Super Hot Drop</h1>
        <div>
            <div className={styles.cardList}>
                {data.map( card => (
                    <Card
                        key={card.id}
                        data={data}
                    />
                ))}
            </div>
        </div>
    </>
  )
}
