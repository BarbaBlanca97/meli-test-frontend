import { useParams } from "react-router-dom"
import ItemsSearchBar from "../../components/SearchBar/ItemSearchBar/ItemsSearchBar"

function ItemDetail() {
    const { itemId } = useParams()

    return <div>
        <ItemsSearchBar />
        <div>Estamos viendo el item con id: {itemId}</div>
    </div>
}

export default ItemDetail
