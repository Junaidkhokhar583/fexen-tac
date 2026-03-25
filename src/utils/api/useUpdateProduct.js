import { useMutation,useQueryClient } from "@tanstack/react-query";
import { updateProduct } from "./products";

export function useUpdateProduct(){
    const queryClient=useQueryClient();

    return useMutation({
        mutationFn: updateProduct,
        onSuccess:(data)=>{
            console.log("updated success," ,data.title)   
            queryClient.invalidateQueries(['products'])
        }
    })
}