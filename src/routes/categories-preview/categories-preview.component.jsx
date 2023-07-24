import { Fragment } from 'react';

import CategoryPreview from '../../components/category-preview/category-preview.component';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);

    return (
        <Fragment>
            {Object.keys(categoriesMap).map((title) => (
                <CategoryPreview key={title} title={title} products ={categoriesMap[title]}></CategoryPreview>
            ))}
        </Fragment>
    )
}

export default CategoriesPreview;