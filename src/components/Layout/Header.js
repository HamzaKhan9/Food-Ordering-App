import React from "react";
import classes from "./Header.module.css";
import CartButton from "./HeaderCartButton";
import mealsImage from "../../assets/mealsImage.png";
function Header(props) {
  return (
    <React.Fragment>
      <header className={classes.header} id="main-header">
        <h1>Paki Meals</h1>
        <CartButton
          itemCount="0"
          onCartButtonClicked={props.onShowCart}
        ></CartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Pakistani Foods"></img>
      </div>
    </React.Fragment>
  );
}

export default Header;
