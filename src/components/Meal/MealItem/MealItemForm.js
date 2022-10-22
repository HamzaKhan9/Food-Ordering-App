// import { useState } from "react";
import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
// import headerClasses from "../../Layout/HeaderCartButton.module.css";

function MealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  function submitHandler(event) {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmountIsValid(false);
      return;
    }
    props.addToCart(enteredAmountNumber);
    // document
    //   .getElementById("headerCartButton")
    //   .classList.add(headerClasses.bump);
    // setTimeout(() => {
    //   document
    //     .getElementById("headerCartButton")
    //     .classList.remove(headerClasses.bump);
    // }, 300);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          defaultValue: "1",
          min: "1",
          max: "5",
          step: "1",
        }}
      />
      <button type="submit">+ Add</button>
      {!amountIsValid && <p>Please enter a amount from 1-5.</p>}
    </form>
  );
}

export default MealItemForm;
