import { all, takeLatest, call, put } from 'redux-saga/effects'
import { fetchCategoriesFailed, fetchCategoriesSucces } from './category.action';
import { getCategoriesAndDocument } from '../../utils/firebase/firebase.utils';
import { CATEGORIES_ACTION_TYPES } from './category.types';

export function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield call(getCategoriesAndDocument, 'categories');
        yield put(fetchCategoriesSucces(categoriesArray));
    } catch(error) {
        yield put(fetchCategoriesFailed(error));
    }
}

export function* onFetchCategories() {
    yield takeLatest(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
        fetchCategoriesAsync
    );
}

export function* categoriesSaga() {
    yield all([call(onFetchCategories)]);
}