import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { pedirProductoPorId } from "../../helpers/pedirData";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const { id } = useParams(); // Obtener el id de la URL
  const [item, setItem] = useState(null);
  

  useEffect(() => {
    pedirProductoPorId(parseInt(id)) // Convertir id a número antes de pasarlo a la función
      .then((res) => {
        setItem(res);
      })
      .catch((err) => {
        console.error("Error al obtener el producto:", err);
        setItem(null); // Manejar el estado en caso de error
      });
  }, [id]);

  if (!item) {
    return <p>Cargando producto...</p>;
  }

  return (
    <div>
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
