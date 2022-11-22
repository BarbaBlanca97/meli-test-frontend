import { Link } from 'react-router-dom'
import formatPrice from '../../helpers/formatPrice'
import imageFreeShipping from '../../assets/ic_shipping.png'
import styles from './ItemResult.module.scss'

function ItemResult({
    item,
}) {
    return <Link to={`/items/${item.id}`}>
        <div className={styles.container}>
            <div>
                <img className={styles.image} src={item.picture}/>
            </div>
            <div className={styles['item-info']}>
                <div className={styles['item-info__header']}>
                    <div>
                        <span className={styles['item-info__header__amount']}>{formatPrice(item.price)}</span>
                        { item.free_shipping &&
                            <img src={imageFreeShipping} />
                        }
                    </div>
                    <div className={styles['item-info__header__location']}>{item.location}</div>
                </div>
                <div className={styles['item-info__title']}>{item.title}</div>
            </div>
        </div>
    </Link>
}

export default ItemResult