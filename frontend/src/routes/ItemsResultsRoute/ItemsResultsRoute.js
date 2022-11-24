import { useQuery } from 'react-query'
import { useSearchParams } from 'react-router-dom'
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs'
import ItemsSearchBar from "../../components/SearchBar/ItemSearchBar/ItemsSearchBar"
import ItemResult from '../../components/ItemResult/ItemResult'
import LoadingIndicator from '../../components/LoadingIndicator/LoadingIndicator'
import ScreenContainer from '../../components/ScreenContainer/ScreenContainer'
import { getItems, getItemsQueryId } from '../../api'

import styles from './ItemsResults.module.scss'

function ItemsResults() {
    const [searchParams] = useSearchParams()
    const search = searchParams.get('search')

    // Las queries no estan devolviendo exactamente la data que pide el ejercio, eso se
    // va a arreglar cuando se haga lo de backend
    const itemsQuery = useQuery([getItemsQueryId, search], () => getItems(search))

    const items = itemsQuery.data

    return <ScreenContainer>
        <ItemsSearchBar />
            { itemsQuery.isSuccess
                ? <div className={styles.content}>
                    <BreadCrumbs crumbs={['Todos', 'Tecnología', 'Celulares']} />
                    <div className={styles.items}>
                            {items.map((item, index) => <div key={item.id}>
                                <ItemResult key={item.id} item={item} />
                                {index !== items.length - 1 &&
                                    <div className={styles['items__separator']}/>
                                }
                            </div>)}
                    </div>
                </div>
                : <LoadingIndicator />
            }
    </ScreenContainer>
}

export default ItemsResults
