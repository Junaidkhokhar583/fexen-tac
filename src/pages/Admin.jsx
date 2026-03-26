import { useProducts } from '../utils/api/useProducts';
import { useDeleteProduct } from '../utils/api/useDeleteProduct';
import { useUpdateProduct } from '../utils/api/useUpdateProduct';
import { useState } from 'react';

function Admin() {
  const { data = [], isLoading } = useProducts();
  const deleteMutation = useDeleteProduct();
  const updateMutation = useUpdateProduct();

  const [editingId, setEditingId] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleConfirm = () => {
    if (!selectedProduct) return;

    if (modalType === 'delete') {
      deleteMutation.mutate(selectedProduct.id);
    }

    if (modalType === 'edit') {
      setEditingId(selectedProduct.id);
      setTitle(selectedProduct.title);
      setDescription(selectedProduct.description);
      setCategory(selectedProduct.category);
      setPrice(selectedProduct.price);
      setImage(selectedProduct.image);
    }

    if (modalType === 'save') {
      updateMutation.mutate({
        id: selectedProduct.id,
        updatedData: {
          ...selectedProduct,
          title,
          description,
          category,
          price,
          image,
        },
      });
      setEditingId(null);
    }

    setShowModal(false);
    setSelectedProduct(null);
  };

  if (isLoading) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      <h1 className="text-xl sm:text-2xl font-bold mb-6">Admin Panel</h1>

      <div className="space-y-4">
        {data.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded shadow flex flex-col md:flex-row md:justify-between gap-4"
          >
        
            {editingId === product.id ? (
              <div className="w-full grid gap-2">
                <input className="border p-2 w-full" value={title} onChange={(e) => setTitle(e.target.value)} />
                <input className="border p-2 w-full" value={description} onChange={(e) => setDescription(e.target.value)} />
                <input className="border p-2 w-full" value={category} onChange={(e) => setCategory(e.target.value)} />
                <input className="border p-2 w-full" value={price} onChange={(e) => setPrice(e.target.value)} />
                <input className="border p-2 w-full" value={image} onChange={(e) => setImage(e.target.value)} />
              </div>
            ) : (
              <div className="grid gap-y-1 w-full md:w-10/12 wrap-break-words">
                <span><strong>Title: </strong> {product.title}</span>
                <span><strong>Description: </strong> {product.description}</span>
                <span><strong>Category: </strong> {product.category}</span>
                <span><strong>Price: </strong> {product.price}</span>
                <span className="truncate md:whitespace-normal">
                  <strong>Url: </strong> {product.image}
                </span>
              </div>
            )}

            
            <div className="flex flex-col sm:flex-row md:flex-col gap-2 w-full md:w-auto md:items-end">
              {editingId === product.id ? (
                <button
                  className="bg-green-500 text-white px-3 py-1 rounded w-full sm:w-auto"
                  onClick={() => {
                    setModalType('save');
                    setSelectedProduct(product);
                    setShowModal(true);
                  }}
                >
                  Save
                </button>
              ) : (
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded w-full sm:w-auto"
                  onClick={() => {
                    setModalType('edit');
                    setSelectedProduct(product);
                    setShowModal(true);
                  }}
                >
                  Edit
                </button>
              )}

              <button
                className="bg-red-500 text-white px-3 py-1 rounded w-full sm:w-auto"
                onClick={() => {
                  setModalType('delete');
                  setSelectedProduct(product);
                  setShowModal(true);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 px-4">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-sm">
            <h2 className="text-base sm:text-lg font-bold mb-4">
              {modalType === 'delete' && 'Are you sure you want to delete this product?'}
              {modalType === 'edit' && 'Do you want to edit this product?'}
              {modalType === 'save' && 'Save changes to this product?'}
            </h2>

            <div className="flex justify-end gap-2">
              <button
                className="bg-gray-300 px-4 py-2 rounded w-full sm:w-auto"
                onClick={() => setShowModal(false)}
              >
                No
              </button>

              <button
                className="bg-green-500 text-white px-4 py-2 rounded w-full sm:w-auto"
                onClick={handleConfirm}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;