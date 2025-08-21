import React from "react";

const Orders: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Your Orders</h2>

        <div className="bg-base-200 rounded-lg p-6 shadow-sm">
          <div className="text-center">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-xl font-semibold mb-2">No orders yet</h3>
            <p className="text-gray-600 mb-4">
              Your order history will appear here once you make your first
              purchase.
            </p>
            <button className="btn btn-primary">Start Shopping</button>
          </div>
        </div>

        {/* Sample order history (commented out for now) */}
        {/*
        <div className="space-y-4">
          <div className="card bg-base-100 shadow">
            <div className="card-body">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="card-title">Order #12345</h3>
                  <p className="text-sm text-gray-600">Placed on January 15, 2025</p>
                </div>
                <span className="badge badge-success">Delivered</span>
              </div>
              <div className="divider my-2"></div>
              <div className="flex justify-between items-center">
                <span>2 items • $49.99</span>
                <button className="btn btn-ghost btn-sm">View Details</button>
              </div>
            </div>
          </div>
        </div>
        */}
      </div>
    </div>
  );
};

export default Orders;
