import React from 'react';

const Product = ({id, name, stock, price, addFunc}) => {

  return (
    
    <div className="flex-container">
        <div class="card">
            <img src="http://img.tjskl.org.cn/pic/z2577d9d-200x200-1/pinarello_lungavita_2010_single_speed_bike.jpg" alt="item" />
            <h2>{name}</h2>
            <p>Price: <em>{price}</em></p>
            <p>Stock : {stock}</p>
            <button type="button" className="btn btn-outline-success" onClick={() => addFunc({id, name, stock,price,units: 1})}>Add Cart</button>
        </div>  
    </div>
 
  );
};

export default Product;