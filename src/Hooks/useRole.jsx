import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useRole = () => {
  const { user, loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [role, setRole] = useState("buyer"); // default role
  const [roleLoading, setRoleLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) {
      setRole("buyer");
      setRoleLoading(false);
      return;
    }

    setRoleLoading(true);
     useAxiosSecure
      .get(`/users/role?email=${user.email}`)
      .then((res) => {
        if (res.data.role) setRole(res.data.role);
        else setRole("buyer");
      })
      .catch((err) => {
        console.error("Failed to fetch role:", err);
        setRole("buyer");
      })
      .finally(() => setRoleLoading(false));
  }, [user, axiosSecure]);

  return { role, roleLoading };
};

export default useRole;
