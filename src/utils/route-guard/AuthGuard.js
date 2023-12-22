import { useNavigate } from "react-router-dom";

// project imports
import { useEffect } from "react";
import { useAuth } from "../../context/auth";

// ==============================|| AUTH GUARD ||============================== //

/**
 * Authentication guard for routes
 * @param {PropTypes.node} children children element/node
 */
const AuthGuard = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  //   useEffect(() => {
  //     if (!isLoggedIn) {
  //       navigate("login", { replace: true });
  //     }
  //   }, [isLoggedIn]);

  return children;
};

export default AuthGuard;
