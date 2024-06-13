import TableComponent from "./TableComponents";
import SubMenu from "../../components/common/SubMenu";
import { useNavigate } from "react-router-dom";
import ScrollToTop from "../../components/common/ScrollToTop";

const Products = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/dashboard");
  };
  return (
    <>
      <SubMenu handleBack={handleBack} main="Products" btn={true} />
      <ScrollToTop />
      <div className="bg-gray-200 p-4 w-full">
        <div className="my-4 p-2 flex justify-between">
          <h1 className="text-2xl font-bold">Products List</h1>
        </div>
        <TableComponent />
      </div>
    </>
  );
};

export default Products;
