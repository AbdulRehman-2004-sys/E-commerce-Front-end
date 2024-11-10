import React,{createContext,useState} from 'react'
import all_product from '../component/assets/all_product'
import { Provider } from 'react-redux'
import { store } from '../app/store'
export const ShopContext = createContext(null)

const defaultCart = ()=>
{
    let cart={};
    for(let index=0; index < all_product.length+1; index++)
    {
        cart[index] = 0;
    }
    return cart;
}

const ShopProvider = (props) => {
    const [cartItems, setCartItems] = useState(defaultCart());
    

    const addToCart=(itemId)=>
    {
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
        console.log(cartItems)
    }
    const removeFromCart=(itemId)=>
    {
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
    }

    const getTotalCartAmount = () => {
        let total = 0;
        for (const item in cartItems) {
          if (cartItems[item] > 0) {
            let itemInfo = all_product.find((product) => product.id === Number(item));
            total += itemInfo.new_price * cartItems[item]
          }
        }
        return total
    }
    const getTotalCartItems=()=>
    {
        let totalItem = 0;
        for(const item in cartItems)
        {
            if(cartItems[item] > 0)
            {
                totalItem += cartItems[item]
            }
        }
        return totalItem;
    }
    const contextValue = {
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalCartItems
    }
    return (
        <ShopContext.Provider value={contextValue}>
            {/* <Provider store={store}> */}
                {props.children}
            {/* </Provider> */}
                {/* <App /> */}
        </ShopContext.Provider>
    )
}

export default ShopProvider
