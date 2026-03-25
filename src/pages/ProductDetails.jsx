import { useParams } from "react-router-dom";
import { useProductId } from "../utils/api/useProductId";

function ProductDetails(){

const {id}=useParams();
const {data,isLoading,error}=useProductId(id);

if(isLoading) return <p className="text-xl mt-10 text-center"> Loading...</p>
if(error) return <p className="text-xl mt-10 text-center font-black"> Failed to fetch product details!</p>

return(
    <>
    <div className="bg-gray-50 min-h-screen">

    <div className="p-6 flex justify-center">
      <div className="bg-white p-6 rounded-xl shadow-md max-w-3xl w-full">
        <img
          src={data.image}
          alt={data.title}
          className="h-64 mx-auto object-contain"
          />

        <h1 className="text-xl font-bold mt-4">{data.title}</h1>

        <p className="text-gray-500 mt-2">Id: {id}</p>
        <p className="text-gray-500 mt-2">{data.category}</p>

        <p className="mt-4 text-gray-700">{data.description}</p>
        <p className="mt-4 text-gray-700">Rating : {data.rating.rate}</p>

        <p className="mt-4 text-2xl font-bold">${data.price}</p>
      </div>
    </div>
          </div>
    </>
)
}

export default ProductDetails;
