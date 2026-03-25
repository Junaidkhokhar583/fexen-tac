import { useQuery } from "@tanstack/react-query";
import { getProduct } from "./getProduct";


export function useProductId(id){
    return useQuery({
        queryKey:['product',id],
        queryFn:()=>getProduct(id),
        enabled:!!id,
    })
}