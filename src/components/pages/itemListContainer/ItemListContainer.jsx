// importacion de lo que necesito
import { useState, useEffect } from "react";
import { products } from "../../../productsMock";
import ItemList from "./ItemList";


export const ItemListContainer = () => {

  const [items,setItems] = useState([])

  useEffect(() => {
  const tarea = new Promise((resolve,reject) => {
    resolve(products)
  })

  tarea.then( (res) => {
   setItems(res)

  }).catch((error) => {
    console.log(error)
  })

  }, []) // termina useEffect
  
 

  return (
    <>
    { items.length > 0 ? <ItemList items={items}/> : <h1>no hay productos</h1> }
   
    </>
  );
};
