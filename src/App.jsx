import ProductList from "./components/ProductList";

const App = () => {
  return ( 
  <div className="min-h-screen p-5 bg-red-100">
    <h1 className="text-3xl font-bold mb-6">Shopping Cart UI</h1>
    <ProductList />
  </div>
  );
}
 
export default App;