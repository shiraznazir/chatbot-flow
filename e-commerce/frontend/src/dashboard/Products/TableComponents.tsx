import React, { useEffect, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { deleteSingleProduct, getAllProduct } from "../../apis";
import toast, { Toaster } from "react-hot-toast";
import DeletePopup from "../../components/common/DeletePopup";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/common/Loader";

interface Product {
  _id: string;
  productName: string;
  price: number;
  type: string;
  category: string;
  subCategory: string;
}

const TableComponent: React.FC = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [isDeletePopupOpen, setDeletePopupOpen] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const getAllProductsApi = async () => {
    try {
      const response = await getAllProduct();
      if (response.success) {
        setProducts(response.product);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("An error occurred while getting the product.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (uid: string) => {
    navigate(`/dashboard/update-product/${uid}`);
  };

  const handleDelete = async () => {
    try {
      const response = await deleteSingleProduct(isDeletePopupOpen);
      if (response.success) {
        toast.success(response.message);
        getAllProductsApi();
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.log("Error ", error);
      toast.error("An error occurred while deleting the product.");
    }
    setDeletePopupOpen("");
  };

  useEffect(() => {
    getAllProductsApi();
  }, []);

  return (
    <div className="overflow-x-auto rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-purple-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Sub-category
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {loading ? (
            <tr className="">
              <td colSpan={6} className="px-6 py-4">
                <Loader />
              </td>
            </tr>
          ) : (
            products.map((product) => (
              <tr key={product._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {product.productName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{product.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">{product.type}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {product.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {product.subCategory}
                </td>
                <td className="flex gap-2 px-6 py-4 whitespace-nowrap">
                  <div
                    onClick={() => handleEdit(product._id)}
                    className="cursor-pointer"
                  >
                    <MdEdit size={25} color={"gray"} />
                  </div>
                  <div
                    onClick={() => setDeletePopupOpen(product._id)}
                    className="cursor-pointer"
                  >
                    <MdDelete size={25} color={"red"} />
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <DeletePopup
        isOpen={Boolean(isDeletePopupOpen)}
        onClose={() => setDeletePopupOpen("")}
        onConfirm={handleDelete}
      />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default TableComponent;
