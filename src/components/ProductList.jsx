import ProductCard from "./ProductCard";

const ProductList = ({products}) => {
    return ( 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
     );
}
 
export default ProductList;