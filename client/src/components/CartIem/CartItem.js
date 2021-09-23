import { Wrapper, CartItemLink } from './CartItem.styled'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const CartItem = ({item, qtyChangeHandler, removeHandler}) => {
    return (
        <Wrapper>
            <div className="image">
                <img src={item.imageUrl} alt={item.name} />
            </div>
            <CartItemLink to={`/product/${item.product} `}>
                {item.name}
            </CartItemLink>
            <p className="price">${item.price}</p>
            <select value={item.qty} onChange={(e) => qtyChangeHandler(item.product, e.target.value)}>
                {[...Array(item.countInStock).keys()].map(x => (
                    <option key={x+1} value={x+1}>{x+1}</option>
                ))}
            </select>

            <button onClick={() => removeHandler(item.product)}><FontAwesomeIcon icon={faTrashAlt} /></button>
        </Wrapper>
    )
}

export default CartItem
