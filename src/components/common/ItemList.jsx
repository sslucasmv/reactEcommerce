import React from 'react';
import Item from './Item';


const ItemList = ({productos,titulo}) => {
    return (
        <>
         <h1 className="main-title">{titulo}</h1>
        <div className='content-card'>
           
            
            {productos.map((prod) => <Item producto={prod} key={prod.id} /> )}
         
        </div>
        </>
    );
};

export default ItemList;
