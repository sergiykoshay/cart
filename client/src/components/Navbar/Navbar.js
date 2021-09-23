import { Wrapper, Logo, Menu, MenuItem, CartLink, Badge, Hamburger } from './styles.styled.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom'
const Navbar = ({click}) => {

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty),0)
    }

    return (
        <Wrapper>
            <Logo>
                <h2>Shop cart</h2>
            </Logo>
            <Menu>
                <MenuItem>
                    <CartLink to="/cart">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <span>
                            Cart
                            <Badge>{getCartCount()}</Badge>
                        </span>
                    </CartLink>
                </MenuItem>
                <MenuItem>
                    <Link to="/">
                        Shop
                    </Link>
                </MenuItem>
            </Menu>
            <Hamburger onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </Hamburger>
        </Wrapper>
    )
}

export default Navbar
