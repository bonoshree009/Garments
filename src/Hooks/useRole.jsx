import useAuth from "./useAuth";

const useRole = () => {
  const { role, loading } = useAuth();
  return [role, loading];
};