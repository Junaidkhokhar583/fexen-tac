import { useProducts } from '../utils/api/useProducts';
import ProductList from '../components/ProductList';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import { Divider } from '../components/Divider';

function Home() {
  const { data, isLoading, error } = useProducts();

  if (isLoading) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 font-black">Error loading products</p>;
  }

  return (
    <>
     <section
      className="relative h-screen flex items-center justify-center text-center text-text-primary"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-2xl px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Buy Something Amazing
        </h1>

        <p className="text-lg md:text-xl mb-6 text-text-tertiary">
          Access something powerful by buying among our accessory.
        </p>

<div className='justify-items-center'>
     <Button text="Get Started"/>
</div>

      </div>
      
    </section>
<Divider/>


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

export default Home;