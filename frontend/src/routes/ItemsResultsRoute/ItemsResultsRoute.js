import { useQuery } from 'react-query'
import { useSearchParams } from 'react-router-dom'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import ItemsSearchBar from "../../components/SearchBar/ItemSearchBar/ItemsSearchBar"
import ItemResult from '../../components/ItemResult/ItemResult'
import { getItems, getItemsQueryId } from '../../api'

import styles from './ItemsResults.module.scss'

function ItemsResults() {
    const [searchParams] = useSearchParams()
    
    const itemsQuery = useQuery(getItemsQueryId, () => getItems(searchParams.get('search')))

    const items = itemsQuery.data

    return <div>
            <ItemsSearchBar />
            <div className={styles.content}>
                <BreadCrumbs crumbs={['Todos', 'Tecnología', 'Celulares']} />
                {itemsQuery.isSuccess
                    ? items.map((item, index) => <div key={item.id}>
                        <ItemResult key={item.id} item={item} />
                        {index !== items.length - 1 &&
                            <div className={styles.separator}/>
                        }
                    </div>)
                    : 'Loading...'
                }
            </div>
        </div>
}

export default ItemsResults
