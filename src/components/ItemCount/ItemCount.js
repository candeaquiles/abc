import { useState } from "react"
import './itemCount.css'

const ItemCount = ({stock, initial, confirmar, onAdd}) => {

    console.log(confirmar)

    const [sumar, setRestar] = useState(0)
    
    const aumento = () => {

        if(sumar < stock){
            setRestar(sumar + 1)
        }else{
            <p>Se ha excedido del monto</p>
        }
        console.log(sumar);
    }

    const disminuir = () => {

        if (sumar > 0){
            setRestar(sumar - 1)
        }else{
            <p>No hay mas productos</p>
        }

    }

    const efectuar = () =>{
        onAdd(sumar)
    }
    return (
        <div>
            <p>Usted tiene {sumar} producto(s) en su carrito</p>

            <button className="outline" onClick={aumento}>Agregar</button>
            <button className="outline" onClick={disminuir}>Quitar</button>
            <button className="outline" onClick={confirmar}>Confirmar</button>
            
           

        </div>
    )
}

export default ItemCount
