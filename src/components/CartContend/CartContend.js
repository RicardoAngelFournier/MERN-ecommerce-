import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CartElements from "./CartElements"
import CartTotal from "./CartTotal";


const CartContend = () => {
    const {cart} = useContext(dataContext);


  return  cart.length > 0 ? (
    <>
        <CartElements/>
        <CartTotal/>

    
    </>
  ): (
    <h2 className="cart-message-center">Aun no has agregado a tu carrito</h2>
  );
}

export default CartContend