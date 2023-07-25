import { Route, Routes } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { useDispatch } from 'react-redux';
import { getCategoriesAndDocument } from '../../utils/firebase/firebase.utils';
import { useEffect } from 'react';
import { setCategories } from '../../store/categories/category.reducer';

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoriesArray = await getCategoriesAndDocument();
            dispatch(setCategories(categoriesArray));
        }

        getCategoriesMap();
    }, []);
    return (
        <Routes>
            <Route index element={<CategoriesPreview />}></Route>
            <Route path=':category' element={<Category />}> </Route>
        </Routes>
    )
}

export default Shop;