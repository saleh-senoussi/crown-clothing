import { createContext, useEffect, useState } from "react";
import { getCategoriesAndDocument } from "../utils/firebase/firebase.utils";

// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils";
// import { SHOP_DATA } from "../shop-data";

export const CategoriesContext = createContext({
    categoriesMap: {}
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocument();
            console.log(categoryMap);
            setCategoriesMap(categoryMap);
        }

        getCategoriesMap();
    }, []);

    const value = { categoriesMap, setCategoriesMap };

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}