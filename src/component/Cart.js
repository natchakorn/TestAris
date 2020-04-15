import React from 'react';


const Cart = ({name,price,units,priceall,isStatus,removeFunc}) => {

  return (
        <div>
        <b>{name}</b><p> Quantity : {units} Price : {units === 1? price : priceall}</p>
        </div>
  );
};

export default Cart;