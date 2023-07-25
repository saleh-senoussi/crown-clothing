import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component"

import { ProductCardContainer } from "./product-card.styles.js";
import { addItemToCart } from "../../store/cart/cart.reducer";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const { name, price, imageUrl } = product;

    const addProductToCart = () => dispatch(addItemToCart(product));

    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={name} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart} >Add to cart</Button>
        </ProductCardContainer>
    );
}

export default ProductCard;