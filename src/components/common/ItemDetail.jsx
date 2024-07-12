import './itemDetail.css'; 

const ItemDetail = ({item}) => {
    return (
        <div className='container-fluid'>
        <div className='container-center'>
            <div className="content-card-detail">
                <div className="card-detail">
                    <div className="product-detail">
                        <img src={item.img} />
                        <div className='product-detail-info'>
                        <h2>{item.title}</h2>
                        <h3 className="descripcion">{item.category}</h3>
                        <p>{item.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ItemDetail