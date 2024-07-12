import { useState } from "react";
import ItemCount from "./ItemCount";

const ItemCountContainer = ({stock}) => {

const [ counter,setCounter] = useState(1);

console.log(stock.length)

const addOne = () => {
    if(counter < stock) {
        setCounter(counter + 1);
} 
}

const subOne = () => {
    if(counter > 1) {
        setCounter(counter - 1);
    } 
}
 

    return (
        <ItemCount counter={counter} addOne={addOne} subOne={subOne} stock={stock}  />
    )  
}


export default ItemCountContainer