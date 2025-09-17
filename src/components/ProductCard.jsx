import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({product}) => {
    const {addToCart} = useContext(CartContext);

    return ( 
        <div className="shadow p-3 rounded-lg flex flex-col">
            <img className="object-cover h-40 rounded-mb-4" src={product.image} alt={product.name} />
            <h2 className="text-xl font-semibold text-white">{product.name}</h2>
            <p className="text-yellow-600 text-sm mb-2">{product.description}</p>
            <p className="font-bold text-lg text-yellow-400">€{product.price}</p>
            <button className="bg-yellow-600 font-semibold text-black px-4 py-2 rounded transition hover:bg-yellow-500 cursor-pointer" onClick={() => addToCart(product)}>Add To Cart</button>
        </div>
     );
}
 
export default ProductCard;