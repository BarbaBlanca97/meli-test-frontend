import { useParams } from "react-router-dom"
import { useQuery } from "react-query"
import ItemsSearchBar from "../../components/SearchBar/ItemSearchBar/ItemsSearchBar"
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs"
import formatPrice from "../../helpers/formatPrice"
import Button from "../../components/Button/Button"

import { getItemQueryId, getItem } from "../../api"
import LoadingIndicator from "../../components/LoadingIndicator/LoadingIndicator"

import styles from './ItemDetail.module.scss'

const getItemConditionText = (item) => item.condition === 'new'
    ? 'Nuevo'
    : 'Usado'

function ItemDetail() {
    const { itemId } = useParams()

    const itemQuery = useQuery([getItemQueryId, itemId], () => getItem(itemId))

    const item = itemQuery.data

    return <div>
        <ItemsSearchBar />
        <div className={styles.content}>
            <BreadCrumbs crumbs={['Todos', 'Tecnología', 'Celulares']} />
            { itemQuery.isSuccess
                ? <div className={styles.item}>
                    <div className={styles['item__description-col']}>
                        <img className={styles['item__description-col__picture']} src={item.picture} />
                        <span className={styles['item__description-col__description-title']}>Descripcion del producto</span>
                        <span className={styles['item__description-col__description']}>{item.description}</span>
                    </div>
                    <div className={styles['item__info-col']}>
                        <div className={styles['item__info-col__metadata']}>
                            <span>{getItemConditionText(item)}</span>
                            {' - '}
                            <span>{item.sold_quantity} vendidos</span>
                        </div>
                        <span className={styles['item__info-col__title']}>{item.title}</span>
                        <span className={styles['item__info-col__price']}>{formatPrice(item.price)}</span>
                        <Button type='primary'>Comprar</Button>
                    </div>
                </div>
                : <LoadingIndicator />
            }
        </div>
    </div>
}

export default ItemDetail
