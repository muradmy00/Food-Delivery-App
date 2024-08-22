import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import { useContext } from 'react';

const PlaceOrder = () => {


  const { getTotalCartAmount } = useContext(StoreContext);

  return (

    
    <form className='place-order'>

    <div className="place-order-left">

    <p className="title">Delivery Information</p>

    <div className="multi-fields">

    <input type="text" placeholder='First Name'/>
    <input type="text" placeholder='Last Name'/>

    </div>

    <input type="email" placeholder='Email Address'/>
    <input type="text" placeholder='City'/>

        <div className="multi-fields">

          <input type="text" placeholder='Region' />
          <input type="text" placeholder='Location' />

        </div>
        <div className="multi-fields">

          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country' />


        </div>

        <input type="text" placeholder='Phone'/>
        

    </div>


    <div className="place-order-right">



        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>৳{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>৳{getTotalCartAmount()===0?0:20}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>৳{getTotalCartAmount()===0?0:getTotalCartAmount() + 20}</b>
            </div>
          </div>

          <button>PROCEED TO Payment</button>

        </div>


    </div>

      
    </form>
  )
}

export default PlaceOrder