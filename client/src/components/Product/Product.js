import {Wrapper, Info, Image, InfoLink} from './Product.styled';

const Product = ({imageUrl, name, description, price, productId}) => {
    return (
        <Wrapper>
            <Image
                src={imageUrl}
                alt={name}/>
            <Info>
                <p className="title">{name}</p>
                <p className="description">
                    {description.substring(0, 100)}...   
                </p>
                <p className="price">
                    {price}
                </p>
                <InfoLink to={`/product/${productId}`}>
                    Details
                </InfoLink>
            </Info>  
        </Wrapper>
    )
}

export default Product
