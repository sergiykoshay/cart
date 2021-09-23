import { useEffect } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import {Wrapper, Title, ProductsGrid} from './HomeScreen.styled.js';
import Product from '../components/Product/Product.js';

import { getProducts as listProducts } from '../redux/actions/productActions'; 

const HomeScreen = () => {
    const dispatch = useDispatch();
    const getProducts = useSelector(state => state.getProducts);
    const {products, loading, error} = getProducts;

    useEffect(() =>{
        dispatch(listProducts())
    },[dispatch]);

    return (
        <Wrapper>
            <Title>Latest Product</Title>
            <ProductsGrid>
                {loading ? <p>loading...</p> : error ? <p>{error}</p> : products.map(product =>(
                    <Product
                        productId={product._id}
                        key={product._id}
                        name={product.name}
                        description={product.description}
                        imageUrl={product.imageUrl}
                    />
                ))}
            </ProductsGrid>
        </Wrapper>
    )
}

export default HomeScreen
