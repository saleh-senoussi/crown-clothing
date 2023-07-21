import { Link } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';
import { CategoryPreviewContainer } from './category-preview.styles';

const CategoryPreview = ({ title, products }) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <Link className='title' to={title.toLowerCase()}> {title.toUpperCase()}</Link>
                <span ></span>
            </h2>
            <div className='preview'>
                {
                    products.
                        filter((_, index) => index < 4)
                        .map((product) => 
                            <ProductCard key={product.id} product={product}></ProductCard>
                        )
                }
            </div>
        </CategoryPreviewContainer>
    );
}

export default CategoryPreview;