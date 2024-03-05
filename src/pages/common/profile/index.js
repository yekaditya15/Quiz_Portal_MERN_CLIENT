// Profile.js
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { updateUserPassword, getUserInfo } from "../../../apicalls/users";
import { message } from "antd";
import "../../../stylesheets/Profile.css"; // Import a CSS file for styling

const Profile = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await getUserInfo();
        if (response.success) {
          setUserData(response.data);
        } else {
          message.error(response.message);
        }
      } catch (error) {
        console.error(error);
        message.error("An error occurred while fetching user data.");
      }
    };

    fetchUserData();
  }, []);

  const handleUpdatePassword = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    try {
      const response = await updateUserPassword({
        oldPassword,
        newPassword,
      });

      if (response.success) {
        message.success(response.message);
        navigate("/home");
      } else {
        message.error(response.message);
      }
    } catch (error) {
      console.error(error);
      message.error("An error occurred while updating the password.");
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-info">
        <h2>Profile</h2>
        {userData && (
          <div>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
          </div>
        )}
      </div>
      <form className="password-form" onSubmit={handleUpdatePassword}>
        <h3>Change Password</h3>
        <div>
          <label>Old Password:</label>
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
        </div>
        <div>
          <label>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <button type="submit">Update Password</button>
      </form>
    </div>
  );
};

export default Profile;
