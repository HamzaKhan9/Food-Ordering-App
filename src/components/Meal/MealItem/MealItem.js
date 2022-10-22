import React from "react";
import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

function MealItem(props) {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.meal.id,
      name: props.meal.name,
      amount: amount,
      price: props.meal.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={classes.description}>{props.meal.description}</div>
        <div className={classes.price}>Rs. {props.meal.price}</div>
      </div>
      <div>
        <MealItemForm addToCart={addToCartHandler} />
      </div>
    </li>
  );
}

export default MealItem;
