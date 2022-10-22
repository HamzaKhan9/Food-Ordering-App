import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const OrderConfirmed = (props) => {
  const closeConfirmHandler = () => {
    props.onClose();
  };
  return (
    <Modal>
      <p>Your order has been confirmed...</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={closeConfirmHandler}>
          Close
        </button>
      </div>
    </Modal>
  );
};
export default OrderConfirmed;
