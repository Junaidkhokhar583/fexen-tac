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

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>

      <div className="space-y-4">
        {data.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >
            {editingId === product.id ? (
              <input
                className="border p-2 w-1/2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            ) : (
              <span>{product.title}</span>
            )}

            <div className="space-x-2">
              {editingId === product.id ? (
                <button
                  className="bg-green-500 text-white px-3 py-1 rounded"
                  onClick={() => {
                    updateMutation.mutate({
                      id: product.id,
                      updatedData: { ...product, title },
                    });
                    setEditingId(null);
                  }}
                >
                  Save
                </button>
              ) : (
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                  onClick={() => {
                    setEditingId(product.id);
                    setTitle(product.title);
                  }}
                >
                  Edit
                </button>
              )}

              <button
                className="bg-red-500 text-white px-3 py-1 rounded"
                onClick={() => deleteMutation.mutate(product.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;