import { useContext } from 'react';
import { CartContext }  from '../context/CartContext';
import { FaShoppingBasket, FaShoppingCart } from 'react-icons/fa';

const Header = () => {
    const { cart } = useContext(CartContext);
    const itemCount = cart.reduce((accummulator, item) => accummulator + item.qty, 0);
    return ( 
        <header className='bg-white shadow-md p-4 flex justify-between items-center'>
            <h1 className='text-2xl font-bold text-black'>
                PCParts
            </h1>
            <div className='relative'>
                <FaShoppingCart className='text-3xl text-black mr-1'/>
                {
                    itemCount > 0 && (
                        <span className="absolute -top-2 -right-1 bg-yellow-500 text-black text-xs w-5 h-5 flex items-center justify-center rounded-full">
                            {itemCount}
                        </span>
                    )
                }
            </div>
        </header>
     );
}
 
export default Header;