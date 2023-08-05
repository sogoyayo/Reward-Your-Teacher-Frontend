import React from "react";
import { LogoutModal } from "./Logout.style";

const Logout = ({handleLogout, closeModal}) => {
  return (
    <div>
      <LogoutModal>
        <div className="Modal-Area" onClick={()=>closeModal(false)} >
          <div className="Modal-content">
            <div className="Modal-header">
              <p>Logout Confirmation</p>
            </div>
            <div className="Modal-body">
              <p>Are you sure you want to logout from your account?</p>
            </div>
            <div className="Modal-footer">
              <button id="no" onClick={()=>closeModal(false)}>No</button>
              <button id="yes" onClick={(e) => handleLogout(e)}>Yes</button>
            </div>
          </div>
        </div>
      </LogoutModal>
    </div>
  );
};

export default Logout;
