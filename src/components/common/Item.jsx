
import { Link } from "react-router-dom"

const Item = ({producto}) => {
    return (
        <>
        <div className="card">
            <h2>{producto.title}</h2>
            <img src={producto.img} />
            <h3>${producto.price.toLocaleString('es-AR')}</h3>
            <Link to={`/item/${producto.id}`} className="btn-moreInfo">Ver más</Link>
            <button className="btn-addCart">Agregar al carrito</button>
        </div>
        </>
    )
    }

export default Item;