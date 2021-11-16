import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../itemDetail/ItemDetail";


const ItemDetailContainer = () => {
  const [obtener, setObtener] = useState([]);
  const { id } = useParams();


  
  
  
  useEffect(() => {
    const getResult = fetch(
      "https://618aec9634b4f400177c4924.mockapi.io/maryjane/v1/products/"
    );
    getResult
      .then((data) => {
        const result = data.json();
       console.log(result);
        return result;
      })
      /*.then((products) => {
        const newsProducts = products.filter((item) => item === id);
        console.log(newsProducts);
        setObtener(newsProducts);
      })*/



  }, [id]);


  return (
    <div>
      <ItemDetail productos={obtener} />
    </div>
  );
};
export default ItemDetailContainer;
