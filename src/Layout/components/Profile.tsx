import React, { useState } from "react";
import { useAuth } from "../../providers/AuthProvider";

const Profile: React.FC = () => {
  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    displayName: user?.displayName || "",
    email: user?.email || "",
    phone: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    // Here you would typically update the user profile
    console.log("Saving profile:", formData);
    setIsEditing(false);
    // Add your update logic here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Your Profile</h2>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            {/* Profile Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="avatar">
                <div className="w-24 rounded-full bg-primary text-primary-content flex items-center justify-center text-2xl font-bold">
                  {user?.email?.charAt(0).toUpperCase() || "U"}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">
                  {user?.displayName || "User"}
                </h3>
                <p className="text-gray-600">{user?.email}</p>
                <p className="text-sm text-gray-500">
                  Member since{" "}
                  {user?.metadata.creationTime
                    ? new Date(user.metadata.creationTime).toLocaleDateString()
                    : "recently"}
                </p>
              </div>
            </div>

            {/* Profile Form */}
            <div className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Display Name</span>
                </label>
                <input
                  type="text"
                  name="displayName"
                  value={formData.displayName}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="input input-bordered"
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email Address</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="input input-bordered"
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                  className="input input-bordered"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 mt-6">
                {isEditing ? (
                  <>
                    <button
                      onClick={handleSave}
                      className="btn btn-primary flex-1"
                    >
                      Save Changes
                    </button>
                    <button
                      onClick={() => setIsEditing(false)}
                      className="btn btn-ghost"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="btn btn-primary"
                  >
                    Edit Profile
                  </button>
                )}
              </div>
            </div>

            {/* Account Info Section */}
            <div className="divider"></div>

            <div className="space-y-2">
              <h4 className="font-semibold">Account Information</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">User ID:</span>
                  <p className="font-mono text-xs truncate">{user?.uid}</p>
                </div>
                <div>
                  <span className="text-gray-600">Email Verified:</span>
                  <p>{user?.emailVerified ? "Yes" : "No"}</p>
                </div>
                <div>
                  <span className="text-gray-600">Last Sign In:</span>
                  <p>
                    {user?.metadata.lastSignInTime
                      ? new Date(user.metadata.lastSignInTime).toLocaleString()
                      : "Unknown"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="card bg-base-100 shadow-xl mt-6">
          <div className="card-body">
            <h3 className="card-title">Security</h3>
            <div className="space-y-3">
              <button className="btn btn-outline w-full justify-start">
                🔒 Change Password
              </button>
              <button className="btn btn-outline w-full justify-start">
                📧 Verify Email
              </button>
              <button className="btn btn-outline w-full justify-start text-error">
                🚫 Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
