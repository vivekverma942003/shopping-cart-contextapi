import React,{useContext} from 'react'
import { ShopContext } from '../../context/shop-context';
const Product = (props) => {
    const {id,productName,price,productImage } = props.data;
    const {addToCart,removeFromCart,cartItems} = useContext(ShopContext)
    const cartItemAmouts =cartItems[id]
  return (
    <div className='product'>
        <img src={productImage}/>
        <div className='description'>
            <p>
                
                <b>{productName}</b>
            </p>
            <p>${price}</p>
        </div>
        <button className='addToCartBttn' onClick={()=>addToCart(id)}>Add To Cart
        {cartItemAmouts>0 &&<>({cartItemAmouts})</>}
        </button>

    </div>

  )
}

export default Product;