import './SearchBarView.scss'

import imageLogo from  '../../../assets/Logo_ML.png'
import imageSearch from '../../../assets/ic_Search.png'

function SearchBarView({
    onSearch,
    onChange,
    value
}) {
    return <div className='container'>
        <div className='content'>
            <img src={imageLogo}/>
            <div className='search-bar'>
                <input
                    className='search-bar__input'
                    placeholder='Nunca dejes de buscar'
                    onChange={onChange}
                    value={value}
                />
                <button
                    onClick={onSearch}
                    className='search-bar__action'
                >
                    <img src={imageSearch}/>
                </button>
            </div>
        </div>
    </div>
}

export default SearchBarView
