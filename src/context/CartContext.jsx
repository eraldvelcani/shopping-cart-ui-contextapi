import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();
export function CartProvider({children}) {
    const [cart, setCart] = useState(() => {
        const stored = localStorage.getItem('cart');
        return stored ? JSON.parse(stored) : [];
    });
    
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const addToCart = (product) => {
        setCart((prev) => {
            const exists = prev.find((item) => item.id === product.id);
            if (exists) {
                return prev.map((item) => item.id === product.id ? {...item, qty: item.qty + 1} : item);
            }
            return [...prev, {...product, qty: 1}]; //return previous array + the new object with qty of 1
        })
    }

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id))
    }

    const nukeCart = () => setCart([]);

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, nukeCart}}>
            {children}
        </CartContext.Provider>
    )
}