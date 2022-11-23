import { useParams } from "react-router-dom"
import ItemsSearchBar from "../../components/SearchBar/ItemSearchBar/ItemsSearchBar"
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs"

import styles from './ItemDetail.module.scss'
import formatPrice from "../../helpers/formatPrice"
import Button from "../../components/Button/Button"

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
        picture: 'https://www.shutterstock.com/image-vector/small-business-idea-successful-entrepreneur-260nw-2150553663.jpg',
        "condition": 'new',
        "free_shipping": true,
        "sold_quantity": 23,
        "description": 'In many locales, accounting format means to wrap the number with parentheses instead of appending a minus sign. You can enable this formatting by setting the currencySign option to "accounting". The default value is "standard"',
    }

    const conditionText = item.condition === 'new'
        ? 'Nuevo'
        : 'Usado'

    return <div>
        <ItemsSearchBar />
        <div className={styles.content}>
            <BreadCrumbs crumbs={['Todos', 'Tecnología', 'Celulares']} />
            <div className={styles.item}>
                <div className={styles['item__description-col']}>
                    <img className={styles['item__description-col__picture']} src={item.picture} />
                    <span className={styles['item__description-col__description-title']}>Descripcion del producto</span>
                    <span className={styles['item__description-col__description']}>{item.description}</span>
                </div>
                <div className={styles['item__info-col']}>
                    <div className={styles['item__info-col__metadata']}>
                        <span>{conditionText}</span>
                        {' - '}
                        <span>{item.sold_quantity} vendidos</span>
                    </div>
                    <span className={styles['item__info-col__title']}>{item.title}</span>
                    <span className={styles['item__info-col__price']}>{formatPrice(item.price)}</span>
                    <Button type='primary'>Comprar</Button>
                </div>
            </div>
        </div>
    </div>
}

export default ItemDetail
