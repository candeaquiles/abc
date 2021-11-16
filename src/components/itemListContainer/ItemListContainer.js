import { useState } from "react"
import { useEffect } from "react"
import ItemList from "../itemList/ItemList"


const ItemListContainer = () => {

    const [producto, setProducto] = useState([])

    useEffect(()=>{
        const getResultado = fetch ("https://618aec9634b4f400177c4924.mockapi.io/maryjane/v1/products")

        getResultado.then((data)=>{
            const result = data.json();
            return result;
        })

        .then((products) =>{
            setProducto(products)
        })
    }, [])



    return (
        <div>
        <ItemList productos={producto}/>
            
        </div>
    )
}

export default ItemListContainer

