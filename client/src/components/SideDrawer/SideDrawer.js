import { Wrapper, Menu, Badge } from './styles.styled';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const SideDrawer = ({show, click}) => {

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const getCartCount = () => {
        return cartItems.reduce((qty, item) => qty + Number(item.qty),0)
    }
    
    return (
        <Wrapper show={show}>
            <Menu onClick={click}>
                <li>
                    <Link to ="/cart">
                        <FontAwesomeIcon icon={faShoppingCart} />
                        <span>
                            Cart
                            <Badge className = "badge">{getCartCount()}</Badge>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Shop
                    </Link>
                </li>
            </Menu>
        </Wrapper>
    )
}

export default SideDrawer;
