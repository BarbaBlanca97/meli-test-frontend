import styles from './SearchBarView.module.scss'

import imageLogo from  '../../../assets/Logo_ML.png'
import imageSearch from '../../../assets/ic_Search.png'

function SearchBarView({
    onSearch,
    onChange,
    value
}) {
    return <div className={styles.container}>
        <div className={styles.content}>
            <img src={imageLogo}/>
            <div className={styles['search-bar']}>
                <input
                    className={styles['search-bar__input']}
                    placeholder='Nunca dejes de buscar'
                    onChange={onChange}
                    value={value}
                />
                <button
                    onClick={onSearch}
                    className={styles['search-bar__action']}
                >
                    <img src={imageSearch}/>
                </button>
            </div>
        </div>
    </div>
}

export default SearchBarView
