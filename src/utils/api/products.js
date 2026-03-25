import axios from 'axios';


export const getProducts = async () => {
  const res = await axios.get('https://fakestoreapi.com/products');
  return res.data;
};

export const getProduct=async(id) =>{
    const res= await axios.get(`https://fakestoreapi.com/products/${id}`);
    return res.data;
}

export const deleteProduct=async(id)=>{
    const res= await axios.delete(`https://fakestoreapi.com/products/${id}`)
    return res.data;
};

export const updateProduct= async ({id,updatedData})=>{
    const res =await axios.put(`https://fakestoreapi.com/products/${id}`,updatedData)
    return res.data;
}