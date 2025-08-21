import React from "react";
import { useAuth } from "../../providers/AuthProvider";

const Home: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">
        Welcome to Context-X{" "}
        {user && (
          <span className="text-primary">{user.displayName || user.email}</span>
        )}
      </h2>
      <div className="text-center">
        {user ? (
          <p className="text-lg">You are successfully logged in!</p>
        ) : (
          <p className="text-lg">Please log in to access all features.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
