import { useState } from 'react'
import { useNavigate, useSearchParams } from "react-router-dom"
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

    const [search, setSearch] = useState(searchParams.get('search') || '')

    const handleSearch = () => {
        if (search) {
            navigate(`/items?search=${search}`)
        }
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
    }

    return <SearchBarView
        onSearch={handleSearch}
        onChange={handleChange}
        value={search}
    />
}

export default ItemsSearchBar
