import { useState } from 'react'
import { useNavigate, useNavigation, useSearchParams } from "react-router-dom"
import SearchBarView from "../SearchBarView/SearchBarView"

/**
 * La idea de este componente es tener la funcionalidad de redirección de
 * la search bar para poder reusarla comodamente, y para no perder flexibilidad,
 * si en un futuro se quiere tener otra search que se comporte distinto
 * (para usar desde otra pantalla o lo que sea) solo hay que crear un nuevo container
 * sin necesidad de reescribir la vista (la vista puede tomar parametros para
 * controlar como se dibuja si es necesario)
 */
function ItemsSearchBar() {
    const navigate = useNavigate()
    const [searchParams] = useSearchParams()

    const [query, setQuery] = useState(searchParams.get('search') || '')

    const handleSearch = () => {
        navigate(`/items?search=${query}`, {
            state: {
                query
            }
        })
    }

    const handleChange = (e) => {
        setQuery(e.target.value)
    }

    return <SearchBarView
        onSearch={handleSearch}
        onChange={handleChange}
        value={query}
    />
}

export default ItemsSearchBar
