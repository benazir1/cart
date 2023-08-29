import React from 'react'
import { useEffect, useState } from 'react';
import { useContext } from 'react'
import {Mycontext} from './Context'
import './Cart.css'
function Cart() {
    const{cart}=useContext(Mycontext)

    const [CART, setCART] = useState([])

    useEffect(() => {
        setCART(cart)
    }, [cart])
  return (
    <div className='c1'>
            {
            CART?.map((cartItem,cartindex)=>{
                return(
                    <div className='card-design' style={{width:'50%'}} >
                    <div className="cart1" style={{alignItems:'center'}}>
                    <img src={cartItem.image}width={90}></img>&nbsp;&nbsp;
                    <span>{cartItem.name}</span>&nbsp;&nbsp;
                    <button onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                    })
                                    setCART(_CART) }}>-</button>&nbsp;&nbsp;
                    <span>{cartItem.quantity}</span>&nbsp;
                    <button
                     onClick={() => {
                        const _CART = CART.map((item, index) => {
                            return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                        })
                        setCART(_CART)
                    }}
                    >+</button>&nbsp;&nbsp;
                  <span> Rs. {cartItem.price * cartItem.quantity} </span>
                        </div>
                        </div>
                )

            })

        }
        <p> Total  <span>
                {
                    CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                }
                </span>
            </p>
            
        </div>
       
  )
}

export default Cart