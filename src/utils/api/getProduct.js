import axios from "axios";

export const getProduct=async(id) =>{
    const res= await axios.get(`https://fakestoreapi.com/products/${id}`);
    return res.data;
}