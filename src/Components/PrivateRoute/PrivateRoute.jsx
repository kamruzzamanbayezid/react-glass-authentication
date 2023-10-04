import { Navigate } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
      const { user, loading } = UseAuth();

      if (loading) {
            return <div className="flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div>
      }

      if (!user) {
            return <Navigate to='/login'></Navigate>
      }
      return children;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
      children: PropTypes.node
}