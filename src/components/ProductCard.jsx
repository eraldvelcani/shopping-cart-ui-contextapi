const ProductCard = ({product}) => {
    return ( 
        <div className="shadow p-3 rounded-lg flex flex-col">
            <img className="object-cover h-40 rounded-mb-4" src={product.image} alt={product.name} />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-400 text-sm mb-2">{product.description}</p>
            <p className="font-bold text-lg">€{product.price}</p>
        </div>
     );
}
 
export default ProductCard;