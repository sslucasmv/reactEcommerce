

export const ProductCard = ( { img,title,description,price}) => {
    return (
    
    
    
    
    <div>
      <img src={img} style={{width:"300px",height:"300px"}}/>
      <h2>{title}</h2>
      <h3>{description}</h3>
      <h3>{price}</h3>
    </div>
    )
}