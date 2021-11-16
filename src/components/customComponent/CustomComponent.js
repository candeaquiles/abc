import { createContext, useState, useEffect } from "react";

export const contexto = createContext()

//const { Provider, Consumer } = contexto
const { Provider } = contexto

const CustomComponent = ({children}) => {

    const [cart, setCart] = useState([])

    const addToCart = (producto, sumar) =>{
        console.log("Contexto");
        console.log(producto, sumar);

    }

    const valorDeContexto = {
        cart: cart,
        addToCart: addToCart
    }

   
    return (
        <div>
             <Provider value={valorDeContexto}> 

                {children}


            </Provider>
            
        </div>
    )
}

export default CustomComponent
