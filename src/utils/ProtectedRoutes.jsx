import { Navigate } from "react-router";
import { useDataUser } from "../components/ticket_form/ticketContext";

const ProtectedRoutes = ({ children }) => {
  const { isFormSubmitted } = useDataUser();

  if (!isFormSubmitted) {
    return <Navigate to="/ticketform" />;
  }

  return children;
};

export default ProtectedRoutes;
