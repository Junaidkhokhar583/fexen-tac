import { useMutation,useQueryClient } from "@tanstack/react-query";
import { deleteProduct } from "./products";

export function useDeleteProduct(){
    const queryClient=useQueryClient();

    return useMutation({
        mutationFn: deleteProduct,
        onSuccess:(data)=>{
            console.log("deleted successfully,", data.title)
            queryClient.invalidateQueries(['products'])
        }
    })
}