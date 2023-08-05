import React from "react";
import { LogoutModal } from "./Logout.style";

const Logout = ({handleLogout}, {closeModal}) => {
  return (
    <div>
      <LogoutModal>
        <div className="Modal-Area">
          <div className="Modal-content">
            <div className="Modal-header">
              <p>Logout Confirmation</p>
            </div>
            <div className="Modal-body">
              <p>Are you sure you want to logout from your account?</p>
            </div>
            <div className="Modal-footer">
              <button id="yes" onClick={(e) => handleLogout(e)}>Yes</button>
              <button id="no" onClick={(e)=>closeModal(e)}>No</button>
            </div>
          </div>
        </div>
      </LogoutModal>
    </div>
  );
};

export default Logout;
