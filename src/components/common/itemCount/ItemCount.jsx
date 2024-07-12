import { colors } from "@mui/material";



const ItemCount = ({counter, addOne,subOne,stock}) => {
    return (
       <>
       <div className="counter">
       <i className={`fa-solid fa-caret-left color-arrow ${counter === 1 ? 'disable' : ''}`} onClick={subOne}></i>
        <span className="text-span">{counter} / <span className="stock"> {stock}</span></span>
        <i className="fa-solid fa-caret-right color-arrow" onClick={addOne}></i>
       </div>
       </>
    )
}
export default ItemCount;