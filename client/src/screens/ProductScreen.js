import { Wrapper, BlockLeft, BlockRight, InfoLeft, InfoRight } from './ProductScreen.styled.js';
import {useState, useEffect} from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getProductDetails } from '../redux/actions/productActions';
import {addToCart} from '../redux/actions/cartActions';

const ProductScreen = ({match, history}) => {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.getProductDetails);
    const {loading, error, product} = productDetails;

    useEffect(() => {
        if( product && match.params.id !== product._id ) {
            dispatch(getProductDetails(match.params.id))
        }
    },[dispatch, product, match]);

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
        console.log(qty);
        history.push("/cart");
    }

    return (
        <Wrapper>
            {loading ? <p>Loaing...</p> : error ? <p>{error}</p> : (
                <>
                    <BlockLeft>
                        <div>
                            <img src={product.imageUrl} alt={product.name} />
                        </div>
                        <InfoLeft>
                            <p className="title">{product.name}</p>
                            <p className="price">Price: ${product.price}</p>
                            <p className="description">{product.description}</p>
                        </InfoLeft>
                    </BlockLeft>
                    <BlockRight>
                        <InfoRight>
                            <p className="price">Price <span>${product.price}</span></p>
                            <p className="status">Status <span>{product.countInStock > 0 ? "In stock" : "Out of stock"}</span></p>
                            <p className="quality">
                                Quality:
                                <select value={qty} onChange={(e) => setQty(e.target.value)} name="" id="">
                                    {[...Array(product.countInStock).keys()].map((x) => ( 
                                        <option key={x+1} value={x+1}>{x+1}</option>
                                    ))}
                                </select>
                            </p>
                            <p>
                                <button type="button" onClick={addToCartHandler}>Add to Cart</button>
                            </p>
                        </InfoRight>
                    </BlockRight>  

                </>
            )}
            
        </Wrapper>
    )
}

export default ProductScreen 
