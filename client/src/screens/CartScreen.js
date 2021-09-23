import { Wrapper, BlockLeft, BlockRight} from './CartScreen.styled.js';
import CartItem from '../components/CartIem/CartItem.js';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { addToCart, removeFromCart } from '../redux/actions/cartActions'
const CartScreen = () => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const qtyChangeHandler = (id, qty) => {
        dispatch(addToCart(id, qty));
    };

    const removeHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
    }

    const getCartSubtotal = () => {
        return cartItems.reduce((price, item) =>  (item.price * item.qty) + price, 0)
    }

    return (
        <Wrapper>
            <BlockLeft>
                <h2>Shoping cart</h2>
                {cartItems.length === 0 ? (
                    <div>
                        Yuor cart is empty <Link to="/">Go back</Link>
                    </div>
                ): cartItems.map(item => (
                    <CartItem key={item.product} item={item} qtyChangeHandler={qtyChangeHandler} removeHandler={removeHandler}/>
                ))}
            </BlockLeft>
            <BlockRight>
                <div>
                    <p>Subtotal {getCartCount()} items </p>
                    <p>Total price: ${getCartSubtotal().toFixed(2)}</p>
                </div>
                <div>
                    <button>Proceed to checkout</button>
                </div>
            </BlockRight>
        </Wrapper>
    )
}

export default CartScreen;
