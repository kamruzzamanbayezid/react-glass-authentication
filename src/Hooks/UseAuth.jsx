import { useContext } from "react";
import { AuthContext } from "../Pages/AuthProvider/AuthProvider";

const UseAuth = () => {

      const all = useContext(AuthContext);

      return all;
};

export default UseAuth;