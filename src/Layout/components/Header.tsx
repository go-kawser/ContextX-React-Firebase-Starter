import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/AuthProvider";

const Header: React.FC = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div className="navbar bg-primary text-primary-content">
      <Link to="/" className="btn btn-ghost normal-case text-xl">
        CONTEXT-X
      </Link>
      <Link to="/" className="btn btn-ghost normal-case text-xl">
        Home
      </Link>
      <Link to="/profile" className="btn btn-ghost normal-case text-xl">
        Profile
      </Link>
      <Link to="/orders" className="btn btn-ghost normal-case text-xl">
        Orders
      </Link>

      {user ? (
        <>
          <span className="ml-auto mr-4">{user.email}</span>
          <button onClick={handleLogOut} className="btn btn-outline btn-sm">
            Sign Out
          </button>
        </>
      ) : (
        <>
          <Link to="/login" className="btn btn-ghost normal-case text-xl">
            Login
          </Link>
          <Link to="/register" className="btn btn-ghost normal-case text-xl">
            Register
          </Link>
        </>
      )}
    </div>
  );
};

export default Header;
