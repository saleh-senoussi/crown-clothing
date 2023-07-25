import { getCategoriesAndDocument } from "../../utils/firebase/firebase.utils";
import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const fetchCategoriesStart = 
    () => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);

export const fetchCategoriesSucces = 
    (categoriesArray) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCategoriesFailed =
    (error) => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAIlED, error);

export const fetchCategoriesAsync = () => async (dispatch) => {
    dispatch(fetchCategoriesStart());
    try {
        const categoriesArray = await getCategoriesAndDocument();
        dispatch(fetchCategoriesSucces(categoriesArray));
    } catch(error)  {
        dispatch(fetchCategoriesFailed(error));
    }
}