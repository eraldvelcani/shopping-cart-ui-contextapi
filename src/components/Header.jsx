import { useState } from 'react';
import { useContext } from 'react';
import { CartContext }  from '../context/CartContext';
import { FaShoppingBasket } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

const Header = () => {
    const [dropDownVisible, setDropDownVisible] = useState(false);
    
    const { cart, removeFromCart, nukeCart } = useContext(CartContext);
    const itemCount = cart.reduce((accummulator, item) => accummulator + item.qty, 0);
    const total = cart.reduce((accummulator, item) => accummulator + item.price * item.qty, 0).toFixed(2);

    return ( 
        <header className="bg-[url('/images/header.jpg')] bg-cover bg-center shadow-md p-4 flex justify-between items-center">
            <h1 className='text-2xl font-bold text-yellow-500'>
                PCParts
            </h1>
            <div className='relative'>
                <button onClick={() => setDropDownVisible(!dropDownVisible)} className='cursor-pointer'>
                    <FaShoppingBasket className='text-3xl text-yellow-500 mr-1'/>
                    {
                        itemCount > 0 && (
                            <span className="absolute -bottom-0 -right-1 font-bold bg-black text-yellow-500 text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                {itemCount}
                            </span>
                        )
                    }
                </button>
                
                {dropDownVisible && (
                    <div className="absolute right-0 mt-2 w-80 bg-white border rounded shadow-lg z-50">
                        <div className="p-4">
                            <h2 className='font-semibold text-lg mb-2'>Your Cart</h2>
                            {cart.length === 0 ? (
                                <p className="text-gray-500 text-sm">No items...</p>
                            ) : (
                            <>
                                <ul className='max-h-60 overflow-y-auto divide-y divide-gray-200'>
                                    {cart.map((item) => (
                                        // <li key={item.id}>
                                        //     <div className="flex justify-between items-center py-2">
                                        //         <span className='font-semibold flex-1 pr-2 trunctuate'>{item.name}</span>
                                        //         <span className='text-base mr-4 whitespace-nowrap'>€{item.price}</span>
                                        //     </div>
                                        // </li>
                                        <li key={item.id} className="flex justify-between items-center py-2">
                                            <div>
                                                <p className='font-semibold'>{item.name}</p>
                                                <p className='text-base'>{item.qty} × €{item.price}</p>
                                            </div>
                                            <button className='flex items-center justify-center w-5 h-5 text-white bg-red-500 rounded-full cursor-pointer hover:bg-red-700' onClick={() => removeFromCart(item.id)}>
                                                <FaTimes className='text-xs' />
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                                <div className='mt-4 flex justify-between font-semibold'>
                                    <span>Total:</span>
                                    <span>€{total}</span>
                                </div>
                                <button className='mt-3 w-full bg-red-500 text-white py-1 rounded transition hover:bg-red-600 cursor-pointer' onClick={nukeCart}>Clear Cart</button>
                            </>
                            )}
                        </div>
                    </div>
                )}

            </div>
        </header>
     );
}
 
export default Header;