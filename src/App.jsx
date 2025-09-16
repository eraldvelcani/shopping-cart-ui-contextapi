import { useEffect, useState } from "react";
import ProductList from "./components/ProductList";

const App = () => {

  const [loader, setLoader] = useState(true);
  const [errorFeedback, setErrorFeedback] = useState(null);
  const [productArray, setProductArray] = useState([]);

  useEffect(() => {
    const fetchProductArray = async () => {
      try {
        const res = await fetch('http://localhost:5000/products');
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
  }, [])

  return ( 
  <div className="min-h-screen p-5 bg-red-100">
    <h1 className="text-3xl font-bold mb-6">Shopping Cart UI</h1>
    {errorFeedback && <p className="errorFeedback">{errorFeedback}</p>}
    {loader && <p>Loading...</p>}
    <ProductList products={productArray} />
  </div>
  );
}
 
export default App;