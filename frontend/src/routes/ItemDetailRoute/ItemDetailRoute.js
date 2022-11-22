import { useParams } from "react-router-dom"
import ItemsSearchBar from "../../components/SearchBar/ItemSearchBar/ItemsSearchBar"
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs"

import styles from './ItemDetail.module.scss'
import formatPrice from "../../helpers/formatPrice"

function ItemDetail() {
    const { itemId } = useParams()

    const item = {
        "id": 'asdasdasd',
        "title": 'Fuente de alimentación para PC LNZ SX Series SX500-FC 500W negra 115V/230V',
        "price": {
            "currency": 'ARS',
            "amount": 3456,
            "decimals": 74,
        },
        picture: 'https://http2.mlstatic.com/D_NQ_NP_851471-MLA45979938567_052021-O.webp',
        "condition": 'new',
        "free_shipping": true,
        "sold_quantity": 23,
        "description": 'In many locales, accounting format means to wrap the number with parentheses instead of appending a minus sign. You can enable this formatting by setting the currencySign option to "accounting". The default value is "standard"',
    }

    return <div>
        <ItemsSearchBar />
        <div className={styles.content}>
            <BreadCrumbs crumbs={['Todos', 'Tecnología', 'Celulares']} />
            <div className={styles.item}>
                <div className={styles['item__main-col']}>
                    <img className={styles['item__main-col__picture']} src={item.picture} />
                    <span className={styles['item__main-col__description-title']}>Descripcion del producto</span>
                    <span className={styles['item__main-col__description']}>{item.description}</span>
                </div>
                <div>
                    <div className={styles['item__metadata']}>
                        <span>{item.condition}</span>
                        {' - '}
                        <span>{item.sold_quantity} vendidos</span>
                    </div>
                    <span className={styles['item__title']}>{item.title}</span>
                    <span className={styles['item__price']}>{formatPrice(item.price)}</span>
                    <button className={styles['item__buy']}>Comprar</button>
                </div>
            </div>
        </div>
    </div>
}

export default ItemDetail
