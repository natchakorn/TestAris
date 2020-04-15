import React ,{Component} from "react";
import { logDOM } from "@testing-library/react";
import Product from './Product';
import Cart from './Cart';

export default class List extends Component{

      constructor() {
        super();
        this.state = {
          product:[{
            id: 1,
            name: "Nintendo",
            price: 10000,
            stock: 5,
            buy:0
          },
        
          {
              id: 2,
              name: "Play Station 4",
              price: 5000,
              stock: 10,
              buy:0
          },
          {
            id: 3,
            name: "Mac",
            price: 34000,
            stock: 5,
            buy:0
        }],
          cart:[],
          total:0,
          status:false,
          
        };
      }


      handleAddFunc(product) {
      
        const existingProduct = this.state.cart.filter(p => p.id === product.id);
        if (existingProduct.length > 0) {
            const withoutExistingProduct = this.state.cart.filter(p => p.id !== product.id);
            
            this.setState({
              cart:[...withoutExistingProduct]

            })
            if((existingProduct[0].units+1) <= product.stock){
              this.setState({
                total:this.state.total+product.price
              }) 
              
            const updatedUnitsProduct = {
              ...existingProduct[0],
              units: existingProduct[0].units + product.units,
              priceall: (existingProduct[0].units+1)* product.price
            };
            this.setState({
              cart: [...withoutExistingProduct, updatedUnitsProduct],
              status:true
            });
          
          }else{
                this.setState({
                  cart:this.state.cart,
                });
                
          }   

        } else {
          this.setState({
            total:this.state.total+product.price
          }) 
          this.setState({
            stock:product.stock -1,
            cart: [...this.state.cart, product],
            status:true, 
          });
        } 
      }

      removeItem(){
        this.setState({
          total:0,
          cart:[],
          status:true
        })
      }

      render() {
          const isStatus = this.state.status;
        return (
          <main className="">
            <div class="header">
              <h1>Test Shopping</h1>
            </div>
           <div className="leftcolumn">
             {
              this.state.product.map(p => <Product key={p.id} {...p} addFunc={this.handleAddFunc.bind(this)} />)
            }
          </div>
          <div className="rightcolumn">
            
            <div className="card">
            <h3>Cart</h3>
            {isStatus ?  '': 'Cart Empty'}
            {
              this.state.cart.map(cart =>
              <Cart key={cart.id} {...cart} isStatus={isStatus} />)
            }
            {this.state.total ==0 ? '' : <p>Total Price : {this.state.total}</p>}
            {isStatus ? <p>{this.state.product.buy}</p>:''}
            {isStatus ?
            <button type="button" className="btn btn-outline-success" onClick={() => this.removeItem()} >Payment</button>: ''}  
          </div>
          </div>
          </main>
        );
      }
  
}
