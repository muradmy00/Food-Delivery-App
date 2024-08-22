import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import Cart from "../pages/Cart/Cart";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {


    const [cartItems,setCartItem] = useState({});


    const addToCart = (itemId) => {

        if(!cartItems[itemId]){
           setCartItem((prev) => ({...prev,[itemId]:1})) 
        }
        else{
            setCartItem((prev) => ({...prev,[itemId]:prev[itemId]+1}))
        }

    }

    const removeFromCart = (itemId) => {

    setCartItem((prev) => ({ ...prev, [itemId]:prev[itemId]-1}))
        

    }

// Just check in cart items

    // useEffect(() => {

    //     console.log(cartItems)

    // },[cartItems])

    const getTotalCartAmount = () => {

        let totalAmount = 0;

        for(const item in cartItems){


            if(cartItems[item]>0){

                let itemInfo = food_list.find((product) => product._id === item);
                totalAmount += itemInfo.price * cartItems[item];
            }
            
        }
        return totalAmount


    }

    //for loop cartItems er key value holo item (one by one)


    const contextValue = {

        food_list,
        cartItems,
        addToCart,
        setCartItem,
        removeFromCart,
        getTotalCartAmount
    }

    return (

        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

} 

export default  StoreContextProvider