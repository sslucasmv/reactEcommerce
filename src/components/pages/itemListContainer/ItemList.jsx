
import { ProductCard } from "../../common/ProductCard"

const ItemList = ({items}) => {

  return (
    <div>

    { items.map((item)=> {
      return(
      <ProductCard
      key={item.id} 
      img={item.img} 
      title={item.title} 
      description={item.description} 
      price={item.price} 
      />
      );

    })}
    </div>
  );
}

export default ItemList;
