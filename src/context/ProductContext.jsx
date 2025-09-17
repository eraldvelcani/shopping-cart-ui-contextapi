import { createContext, useContext, useState, useEffect } from "react";


export const ProductContext = createContext();
export function ProductProvider({children}) {
    const [loader, setLoader] = useState(true);
    const [errorFeedback, setErrorFeedback] = useState(null);
    const [productArray, setProductArray] = useState([]);

    useEffect(() => {
        const fetchProductArray = async () => {
        try {
            const res = await fetch('api/products');
            if (!res.ok) throw new Error('Could not fetch products.');
            const data = await res.json();
            setProductArray(data);
        } catch (error) {
            setErrorFeedback(error);
        } finally {
            setLoader(false);
        }
        };
        fetchProductArray();
  }, []);

  return (
    <ProductContext.Provider value={{productArray, loader, errorFeedback}}>
        {children}
    </ProductContext.Provider>
  )
}