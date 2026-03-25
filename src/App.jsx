import { useProducts } from './utils/api/useProducts';
import ProductList from './components/ProductList';
import { Header } from './components/Header';

function App() {
  const { data, isLoading, error } = useProducts();
  console.log("data :" ,data)

  if (isLoading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">Error loading products</p>;
  }

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">
       Products
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {data.map((product) => (
          <ProductList key={product.id} product={product} />
          ))}
          </div>
    </div>
          </>
  );
}

export default App;