import { useLocalStorageState } from "../hooks/useLocalStorage";
import * as Auth from "../services/auth";

// aca simulamos lo que podría ser un servicio de autenticación
// servicios como: AWS, Firebase, o un endpoint de nuestro backend

export const useAuth = () => {
  const [users, setUsers] = useLocalStorageState("users", []);
  return {
    signin: (email, password) => Auth.doSignin(users, email, password),
    signup: (user) => Auth.doSignup(users, setUsers, user),
  };
};
