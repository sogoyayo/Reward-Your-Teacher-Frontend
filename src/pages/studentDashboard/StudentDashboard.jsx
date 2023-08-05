import React, { useState, useEffect } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import "./style.css";
import {
  TopBoxSection,
  BottomBoxSection,
  GreenTop,
  TransactionDetails,
} from "./Studentdashboard.style";

import Modal from "../Modal/Modal";
import { getWalletBalance, getTotalMoneySent } from "./WalletBallance";
import FundWallet from "./FundWallet";
import Logout from "../Modal/logout/Logout";
import { studentDashBoard } from "../../Utility/DashboardUtilities";
import StudentDashboard2 from "./StudentDashboard copy";
import {studentMenuBar} from "../../Utility/DashboardUtilities";
const StudentDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleBurger = () => setIsOpen(!isOpen);
  const handleCloseSideBar = () => setIsOpen(true);
  const [balance, setBalance] = useState(0);
  const [totalMoneySent, setTotalMoneySent] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  });

  useEffect(() => {
    getWalletBalance().then((res) => {
      setBalance(formatter.format(res));
    });
  }, [balance]);

  useEffect(() => {
    getTotalMoneySent().then((res) => {
      setTotalMoneySent(formatter.format(res.data));
      console.log(res.data);
    });
  }, [totalMoneySent]);

  


  const handlePaymentData = () => {
    setShowForm(!showForm);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <StudentDashboard2 navItems={studentDashBoard} menu={studentMenuBar}>
        <h2>My Dashboard</h2>
        <TopBoxSection>
          <div>
            <h4>My Wallet Balance</h4>
            <p>Account is active</p>
          </div>
          <h1>{balance}</h1>
          <button onClick={handlePaymentData}>
            <i class="fa fa-add"></i>
            <span>Add Money</span>
          </button>
          {showForm && (
            <Modal closeModal={handlePaymentData}>
              <FundWallet />
            </Modal>
          )}
        </TopBoxSection>
        <BottomBoxSection>
          <GreenTop></GreenTop>
          <TransactionDetails>
            <div>
              <h4>Total Money Sent</h4>
              <h1>{totalMoneySent}</h1>
              <p>Sent</p>
            </div>
            <span>
              <img src="img/Vector (8).png" alt="" />
            </span>
          </TransactionDetails>
        </BottomBoxSection>
    </StudentDashboard2>
  );
};

export default StudentDashboard;
