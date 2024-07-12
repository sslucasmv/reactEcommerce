import React, { useEffect, useState } from "react";
import { pedirDatos } from "./helpers/pedirData";
import ItemList from "./components/common/ItemList";

import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const [titulo,setTitulo] = useState("Productos");

  const category = useParams().category;
  
  console.log(category)

  useEffect(() => {
    pedirDatos()
      .then((res) => {
        if(category ) {
          setProductos(res.filter((prod) => prod.category === category)) 
          setTitulo(category)  // Modifico el título según la categoría
        } else {
          setProductos(res)
          setTitulo("Productos")
        }
      
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
      });
  }, [category]);


  return (
    <div className="container-fluid">
      <div className="container-center">
        <ItemList productos={productos} titulo={titulo} />
      </div>
    </div>
  );
};

export default ItemListContainer;
