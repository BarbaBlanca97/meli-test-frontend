import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import ItemsSearchBar from "../../components/SearchBar/ItemSearchBar/ItemsSearchBar"

function ItemsResults() {
    const [items, setItems] = useState([])
    const [searchParams] = useSearchParams()

    // replace
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setItems([
                {
                    id: 'id1',
                    name: 'Item 1'
                },
                {
                    id: 'id2',
                    name: 'Item 2'
                },
                {
                    id: 'id3',
                    name: 'Item 3'
                },
            ])
        }, 1300)

        return () => {
            clearTimeout(timeoutId)
        }
    })

    return <div>
        <ItemsSearchBar />
        <div>
            <BreadCrumbs />
            {items.map(item => <div key={item.id}>
                <div>
                    Item: {item.name}
                </div>
                <Link to={`/items/${item.id}`}>Go to item {item.id}</Link>
                <br />
                <br />
            </div>)}
        </div>
    </div>
}

export default ItemsResults
