import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context.js";
import CartIcon from "../Cart/CartIcon.js";
import classes from "./HeaderCartButton.module.css";

function CartButton(props) {
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((currNum, item) => {
    return currNum + item.amount;
  }, 0);

  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setButtonIsHighlighted(true);
    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  const btnClasses = `${classes.button} ${
    buttonIsHighlighted ? classes.bump : ""
  }`;
  return (
    <button
      id="headerCartButton"
      className={btnClasses}
      onClick={props.onCartButtonClicked}
    >
      <CartIcon className={classes.icon} />
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default CartButton;
