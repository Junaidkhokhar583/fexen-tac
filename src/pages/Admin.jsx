import { useProducts } from '../utils/api/useProducts';
import { useDeleteProduct } from '../utils/api/useDeleteProduct';
import { useUpdateProduct } from '../utils/api/useUpdateProduct';
import { useState } from 'react';

function Admin() {
  const { data = [], isLoading } = useProducts();
  const deleteMutation = useDeleteProduct();
  const updateMutation = useUpdateProduct();

  const [editingProduct, setEditingProduct] = useState(null); 
  const [editFields, setEditFields] = useState({
    title: '',
    description: '',
    category: '',
    price: '',
    image: '',
  });
  const [isSaving, setIsSaving] = useState(false); 
  const [isDeleting, setIsDeleting] = useState(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  if (isLoading) return <p>Loading...</p>;

  const openEditModal = (product) => {
    setEditingProduct(product);
    setEditFields({
      title: product.title,
      description: product.description,
      category: product.category,
      price: product.price,
      image: product.image,
    });
  };

  const handleEditChange = (field, value) => {
    setEditFields((prev) => ({ ...prev, [field]: value }));
  };

  const saveEdit = () => {
    setIsSaving(true);
    updateMutation.mutate(
      { id: editingProduct.id, updatedData: { ...editingProduct, ...editFields } },
      {
        onSuccess: () => {
          setEditingProduct(null);
          setIsSaving(false);
        },
        onError: () => {
          setIsSaving(false);
        },
      }
    );
  };

  const openDeleteModal = (productId) => {
    setProductToDelete(productId);
    setShowDeleteModal(true);
  };

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center sm:text-left">Admin Panel</h1>

      <div className="space-y-4">
        {data.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded shadow flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2 sm:gap-0"
          >
            <div className="grid gap-y-1 w-full sm:w-11/12">
              <span><strong>Title: </strong>{product.title}</span>
              <span><strong>Description: </strong>{product.description}</span>
              <span><strong>Category: </strong>{product.category}</span>
              <span><strong>Price: </strong>{product.price}</span>
              <span><strong>Url: </strong>{product.image}</span>
            </div>

            <div className="flex sm:flex-col sm:space-y-2 space-x-2 sm:space-x-0 mt-2 sm:mt-0 w-full sm:w-auto">
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded w-full sm:w-auto"
                onClick={() => openEditModal(product)}
              >
                Edit
              </button>

              <button
                className="bg-red-500 text-white px-3 py-1 rounded w-full sm:w-auto"
                onClick={() => openDeleteModal(product.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {editingProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50 p-4">
          <div className="bg-white p-4 sm:p-6 rounded shadow-md w-full max-w-2xl">
            <h2 className="text-lg font-semibold mb-4 text-center sm:text-left">Edit Product</h2>

            <div className="grid gap-2">
              {['title', 'description', 'category', 'price', 'image'].map((field) => (
                <div key={field} className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <label className="font-medium w-full sm:w-32 capitalize">{field}:</label>
                  <input
                    className="border p-2 w-full"
                    value={editFields[field]}
                    onChange={(e) => handleEditChange(field, e.target.value)}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-2 mt-4">
              <button
                className="bg-gray-300 px-4 py-2 rounded"
                disabled={isSaving}
                onClick={() => setEditingProduct(null)}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded flex items-center justify-center min-w-27.5"
                disabled={isSaving}
                onClick={saveEdit}
              >
                {isSaving ? (
                  <span className="flex items-center space-x-1">
                    <span className="animate-bounce" style={{ animationDelay: "0s" }}>.</span>
                    <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>.</span>
                    <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>.</span>
                  </span>
                ) : (
                  "Save"
                )}
              </button>
            </div>
          </div>
        </div>
      )}

    
      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50 p-4">
          <div className="bg-white p-4 sm:p-6 rounded shadow-md w-full max-w-xs">
            <h2 className="text-lg font-semibold mb-4 text-center sm:text-left">
              Are you sure you want to delete?
            </h2>

            <div className="flex flex-col sm:flex-row justify-end gap-2">
              <button
                className="bg-gray-300 px-4 py-2 rounded"
                disabled={isDeleting}
                onClick={() => {
                  setShowDeleteModal(false);
                  setProductToDelete(null);
                }}
              >
                No
              </button>

              <button
                className="bg-red-500 text-white px-4 py-2 rounded flex items-center justify-center min-w-27.5"
                disabled={isDeleting}
                onClick={() => {
                  setIsDeleting(true);
                  deleteMutation.mutate(productToDelete, {
                    onSuccess: () => {
                      setShowDeleteModal(false);
                      setProductToDelete(null);
                      setIsDeleting(false);
                      // setTimeout(() => setIsDeleting(false), 1000);
                    },
                    onError: () => setIsDeleting(false),
                  });
                }}
              >
                {isDeleting ? (
                  <span className="flex items-center space-x-1">
                    <span className="animate-bounce" style={{ animationDelay: "0s" }}>.</span>
                    <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>.</span>
                    <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>.</span>
                  </span>
                ) : (
                  "Yes, Delete"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;