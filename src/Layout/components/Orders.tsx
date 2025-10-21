import React from "react";

const Orders: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Your Orders</h2>

        <div className="bg-base-200 rounded-lg p-6 shadow-sm">
          <div className="text-center">
            <div className="text-6xl mb-4"></div>
            <h3 className="text-xl font-semibold mb-2">No orders yet</h3>
            <p className="text-gray-600 mb-4">
              Your order history will appear here once you make your first
              purchase.
            </p>
            <button className="btn btn-primary">Start Shopping</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
