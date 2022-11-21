import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom"
import HomePage from "./routes/HomePage/HomePage"
import ItemDetail from "./routes/ItemDetail/ItemDetail"
import ItemsResults from "./routes/ItemsResults/ItemsResults"

/*
    Hay dos formas de resolver el ruteo.
    
    Primero, un solo componente padre que vaya renderizando los hijos en base a 
    los cambios en la ruta, mantentiendo una sola instancia de la barra de busqueda 
    por ejemplo.

    Segundo, crear cada vista por separado para que puedan controlar mejor su comportamiento.
    Por ejemplo, esto implicaría que cada vista tenga que importar la barra de busqueda. Puede
    parecer innecesario en un pricipio pero si la funcion (o presencia) de la barra de busqueda depende de la
    ruta que se encuentre activada, esta forma permite separar mejor las responsabilidades de cada componente.

    Como la consigna pide que consideremos escalabilidad, voy a ir por la segunda opción.
*/

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePage />,
	},
	{
		path: "/items",
		element: <ItemsResults />,
	},
	{
		path: "/items/:itemId",
		element: <ItemDetail />,
	},
]);

function App() {
	return <RouterProvider router={router} />
}

export default App
