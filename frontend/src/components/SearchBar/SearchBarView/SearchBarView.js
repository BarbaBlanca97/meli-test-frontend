import './SearchBarView.scss'

function SearchBarView({
    onSearch,
    onChange,
    value
}) {
    return <div className='container'>
        <input
            placeholder='Nunca dejes de buscar'
            onChange={onChange}
            value={value}
        />
        <button onClick={onSearch}>Search!</button>
    </div>
}

export default SearchBarView
