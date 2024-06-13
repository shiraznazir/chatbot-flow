import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Auth: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const user = useSelector((state: any) => state?.user?.user?.userId);

  const renderChild = () => {
    return user ? children : <Navigate to="/login" replace={false} />;
  };

  return renderChild();
};

export default Auth;
