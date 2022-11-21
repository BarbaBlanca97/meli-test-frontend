import SearchBarView from "../SearchBarView/SearchBarView"

/**
 * La idea de este componente es tener la funcionalidad de redirección de
 * la search bar, si en un futuro se quiere tener otra search que se comporte distinto
 * (para usar desde otra pantalla o lo que sea) solo hay que crear un nuevo container
 * sin necesidad de reescribir la vista
 */
function ItemsSearchBar() {
    return <SearchBarView />
}

export default ItemsSearchBar
