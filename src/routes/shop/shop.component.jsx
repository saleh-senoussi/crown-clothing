import { Route, Routes } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { useDispatch } from 'react-redux';
import { fetchCategoriesStart } from '../../store/categories/category.action';
import { useEffect } from 'react';

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchCategoriesStart());
        // eslint-disable-next-line
    }, []);
    return (
        <Routes>
            <Route index element={<CategoriesPreview />}></Route>
            <Route path=':category' element={<Category />}> </Route>
        </Routes>
    )
}

export default Shop;