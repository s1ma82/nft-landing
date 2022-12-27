import React from 'react'
import { Card } from '../components'

export const CardList = () => {

    const data = [
        {title: 'ArtCrypto', price: 25, id: 1, currency: 'ETH', available: true},
        {title: 'ArtCrypto', price: 25, id: 2, currency: 'ETH', available: true},
        {title: 'ArtCrypto', price: 25, id: 3, currency: 'ETH', available: true},
        {title: 'ArtCrypto', price: 25, id: 4, currency: 'ETH', available: true},
    ]


  return (
    <div>
        <h1>Super Hot Drop</h1>
        <div>
            {data.map( card => (
                <Card
                    key={card.id}
                    data
                />
            ))}
        </div>
    </div>
  )
}
