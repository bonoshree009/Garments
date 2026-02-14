import { useContext } from "react";
import { AuthContext } from "../Providers/AuthContext";


// useAuth hook
const useAuth = () => {
 const authInfo =useContext(AuthContext)
  return authInfo;
}

export default useAuth;
