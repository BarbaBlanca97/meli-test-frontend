import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import ItemsSearchBar from "../../components/SearchBar/ItemSearchBar/ItemsSearchBar"
import ItemResult from '../../components/ItemResult/ItemResult'

import styles from './ItemsResults.module.scss'

function ItemsResults() {
    const [items, setItems] = useState([])
    const [searchParams] = useSearchParams()

    // replace
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setItems([
                {
                    id: 'id1',
                    title: 'Fuente de alimentación para PC LNZ SX Series SX500-FC 500W negra 115V/230V',
                    picture: 'https://http2.mlstatic.com/D_NQ_NP_851471-MLA45979938567_052021-O.webp',
                    condition: 'new',
                    free_shipping: true,
                    location: 'Captial Federal',
                    price: {
                        currency: 'ARS',
                        amount: 33,
                        decimal: 0,
                    }
                },
                {
                    id: 'id2',
                    title: 'Item 2',
                    picture: 'https://http2.mlstatic.com/D_NQ_NP_851471-MLA45979938567_052021-O.webp',
                    condition: 'usd',
                    free_shipping: false,
                    location: 'Paraná',
                    price: {
                        currency: 'ARS',
                        amount: 4567,
                        decimal: 0,
                    }
                },
                {
                    id: 'id3',
                    title: 'Item 3',
                    picture: 'https://http2.mlstatic.com/D_NQ_NP_851471-MLA45979938567_052021-O.webp',
                    condition: 'new',
                    free_shipping: false,
                    location: 'Captial Federal',
                    price: {
                        currency: 'ARS',
                        amount: 120,
                        decimal: 50,
                    }
                },
            ])
        }, 1300)

        return () => {
            clearTimeout(timeoutId)
        }
    })

    return <div>
        <ItemsSearchBar />
        <div className={styles.content}>
            <BreadCrumbs crumbs={['Todos', 'Tecnología', 'Celulares']} />
            {items.map((item, index) => <div key={item.id}>
                <ItemResult key={item.id} item={item} />
                {index !== items.length - 1 &&
                    <div className={styles.separator}/>
                }
            </div>)}
        </div>
    </div>
}

export default ItemsResults
