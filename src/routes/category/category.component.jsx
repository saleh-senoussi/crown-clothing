import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoryContainer } from './category.styles';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category]);
    
    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <CategoryContainer>
            <h2 className='title'>{category.toUpperCase()}</h2>
            <div className="body">
                {
                    products && products.map((product) => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </CategoryContainer>
    )
}

export default Category;