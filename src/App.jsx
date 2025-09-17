import ProductList from "./components/ProductList";
import Header from "./components/Header"; //by bringing it to App.jsx it's added to every page.

const App = () => {
  return ( 
  <>
    <Header />
    <div className="min-h-screen p-5 bg-black">
      <h1 className="text-3xl font-bold mb-6 text-yellow-400">Shopping Cart UI</h1>
      <ProductList />
    </div>
  </>
  );
}
 
export default App;