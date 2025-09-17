import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "./ProductCard";

const ProductList = () => {
    const {productArray, loader, errorFeedback} = useContext(ProductContext);

    return ( 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {loader && <p>Loading page...</p>}
            {errorFeedback && <div className="errorFeebback">{errorFeedback}</div>}
            {productArray.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
     );
}
 
export default ProductList;