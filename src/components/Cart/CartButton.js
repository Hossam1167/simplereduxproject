import classes from "./CartButton.module.css";
import { uiAction } from "../../store/ui-slice";
import { useDispatch, useSelector } from "react-redux";

const CartButton = props => {
  const dispatch = useDispatch();
  const cartQuantity = useSelector(state => state.cart.totalQuantity);
  const togglerCartHandler = () => {
    dispatch(uiAction.toggle());
  };
  return (
    <button className={classes.button} onClick={togglerCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
