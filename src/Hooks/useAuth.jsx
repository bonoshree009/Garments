import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


// useAuth hook
const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
