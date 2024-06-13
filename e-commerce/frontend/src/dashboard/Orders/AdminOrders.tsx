import OrdersTable from "./OrdersTable";
import SubMenu from "../../components/common/SubMenu";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../../components/common/ScrollToTop";

const AdminOrders = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/dashboard");
  };
  return (
    <>
      <ScrollToTop />
      <SubMenu handleBack={handleBack} main="Orders" btn={false} />
      <div className="bg-gray-200 p-4 w-full">
        <div className="my-4 p-2 flex justify-between">
          <h1 className="text-2xl font-bold">Orders List</h1>
        </div>
        <OrdersTable />
      </div>
    </>
  );
};

export default AdminOrders;
