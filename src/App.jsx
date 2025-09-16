import { useEffect, useState } from "react";

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
        console.log(data);
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

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {productArray.map((product) => (
        <div key={product.id} className="shadow p-3 rounded-lg flex flex-col">
          <img className="object-cover h-40 rounded-mb-4" src={product.image} alt={product.name} />
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <p className="text-gray-400 text-sm mb-2">{product.description}</p>
          <p className="font-bold text-lg">€{product.price}</p>
        </div>
      )) }
    </div>
  </div>
  );
}
 
export default App;