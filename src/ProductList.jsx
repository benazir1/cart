import React from 'react'
import './ProductsList.css'
import { useContext } from 'react'
import {Mycontext} from './Context'

function ProductList() {
    const{products}=useContext(Mycontext)
    const{AddTocart}=useContext(Mycontext)
  return (
    <div>
         <div className="p1">
        {
            products.map((productItem,Productindex)=>{
                   return(
                    <div  className="b1" style={{width:'33%'}} align-item="center">
                      
                        <div className='product-item'>
                        
                            
                        <div class="card" style={{width: "10rem"}}>
                        
                       <img src={productItem.image} width="100%" class="card-img-top" alt="..."></img>
                        <div class="card-body">
                         
                           <p class="card-text">{productItem.name}</p>
                           <p class="card-text">RS{productItem.price}/-</p>
                          
                           <button class="btn btn-primary btn-lg" onClick={()=>AddTocart(productItem)}>Add to Cart</button>
                      
  </div>
</div>


                           </div>
                    </div>
                   )
            })
        }
    </div>
        </div>
  )
}

export default ProductList
