import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";


import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import TuneIcon from "@mui/icons-material/Tune";
import axios from "../api/axios";
import { SchoolSharp } from "@mui/icons-material";
import { studentDashBoard } from "../Utility/DashboardUtilities";
import LoadingButton from "@mui/lab/LoadingButton";
import Modal from "../components/Modal/Modal";
import "../components/Modal/Modal.css";
import "../components/Modal/SuccessModal.css";
import avataruser from "../assets/image/avataruser.svg";
import PaymentModal from "../components/Modal/PaymentModal";
import "../components/Modal/PaymentModal.css";
import paystack from "../assets/image/paystack.svg";
import SuccessModal from "../components/Modal/SuccessModal";
import suceesful from "../assets/image/suceesful.png";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import StudentDashboard2 from "./studentDashboard/StudentDashboard copy";

function TeachersPage() {
  const [teachers, setTeachers] = useState([]);
  const [searchTeachers, setSearchTeachers] = useState("");
  const [teacherRecord, setTeacherRecord] = useState({});
  const [pageNo, setPageNo] = useState(1);
  const [pageSize, setPageSize] = useState(30);
  const [sortBy, setSortBy] = useState("Halifield School");
  const [ShowModal, setShowModal] = useState(false);
  const [insideModal, setInsideModal] = useState(false);
  const [amountToSend, setAmountToSend] = useState(0);
  const [amountEntered, setAmountEnter] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [snackbarHandler, setSnackbarHandler] = useState(false);

  const toggleModal = () => {
    setShowModal(!ShowModal);
  };
  const toggleinsideModal = () => {
    setShowModal(false);
    setInsideModal(!insideModal);
  };

  const collapseModal = () => {
    setSuccessModal(false);
    setShowModal(false);
    setInsideModal(false);
  }
  const payload = {
    amount: parseInt(amountToSend),
  };
  let { school } = useParams();
  const columns = [
    { field: "name", headerName: "Name", width: 300 },
    { field: "School", headerName: "School", width: 300 },
    { field: "role", headerName: "Role", width: 150 },
    { field: "teachingPeriod", headerName: "Period", width: 150 },
  ];

  const retrieveRecord = (id) => {
    axios.get("/api/view/" + id).then((response) => {
       console.log(response.data.data);
      setTeacherRecord(response.data.data);
      toggleModal();
    });
  };

  const sendReward = (id) => {
    setLoading(true);
    axios.post("/api/rewardTeacher/" + id, payload).then((response) => {
      if (response.data.message === "success") {
        setLoading(false);
        setSuccessModal(!successModal);
      } else {
        setMessage(response.data.message);
        setSnackbarHandler(true);
        setLoading(false);
      }

      // toggleModal();
    });
  };

  const handleClose = () => {
    setSnackbarHandler(false);
  };

  const search = (word) => {
    teachers.filter((item) => {
      let searchResults = [];

      if (item === word) {
        setTeachers(searchResults);
        console.log(item);
      }
    });
  };

  useEffect(() => {
    axios
      .get(
        "/api/getAllWithPagination/" + pageNo + "/" + pageSize + "/" + school
      )
      .then((response) => {
        console.log(response.data.content);
        setTeachers(response.data.content);
      });
  }, []);

  return (
    <>
      {/* <DashboardAppBar />
      <Snackbar
        open={snackbarHandler}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MuiAlert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {message}
        </MuiAlert>
      </Snackbar>
      <Grid container>
        <Grid item md={3} lg={3} xs={4} sm={4}>
          <DashboardSideNav navlink={studentDashBoard} />
        </Grid> */}
      <StudentDashboard2 navItems={ studentDashBoard }>
        <Snackbar open={snackbarHandler} anchorOrigin={{ vertical : 'top' , horizontal : 'right' }} autoHideDuration={6000} onClose={handleClose}>
          <MuiAlert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            {message}
          </MuiAlert>
        </Snackbar>
        <Grid container>

        <Grid
          style={{ height: 450, width: "100%" }}
          item
          md={12}
          lg={12}
          xs={4}
          sm={4}
        >
          <Typography sx={{ mt: 5, color: "#55a630", mb: 3 }}>
            All Teachers
          </Typography>
          <Grid container>
            <Grid item md={3} lg={9} xs={4} sm={4}>
              <TextField
                id="outlined-basic"
                label="Search"
                variant="outlined"
                fullWidth
                value={searchTeachers}
                onChange={(e) => {
                  setSearchTeachers(e.target.value);
                }}
                onKeyDown={() => search(searchTeachers)}
                sx={{ mb: 5 }}
              />
            </Grid>
            <Grid item md={3} lg={3} xs={4} sm={4}>
              <Button
                variant="outlined"
                sx={{ height: "30px", pb: 3.3, pt: 3.3, ml: 15 }}
              >
                Filter <TuneIcon />
              </Button>
            </Grid>
          </Grid>

          <DataGrid
            columns={columns}
            rows={teachers}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[10, 20, 30]}
            onSelectionModelChange={(id) => retrieveRecord(id)}
          />
        </Grid>
        <Grid item md={1} lg={1} xs={1} sm={1}></Grid>
        </Grid>
        {ShowModal && (
        <Modal title="Profile details" closeModal={toggleModal}>
          <div className="contentContainer">
            <div className="userInfo">
              <img src={avataruser} alt="img" className="avatar"></img>
              <div className="userInfo-add">
                <h2 className="userrname-avatar">{teacherRecord.name}</h2>
                <p className="school-info"> {teacherRecord.school} </p>
                <p className="title-info">Head Teacher</p>
              </div>
            </div>
          </div>
          <div className="AboutModal">
            <h1 className="about-text">About</h1>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Consectetur feugiat aenean morbi non pretium. Tortor lectus quam
              dictumst nunc, faucibus cursus. Mi sit in bibendum faucibus sed ac
              id. Tortor lectus quam dictumst nunc, faucibus cursus. Mi sit in
              bibendum faucibus sed ac id.
            </p>
          </div>
          <div className="info-section">
            <h1 className="info-header"> Other info</h1>
            <h1 className="email-style">{teacherRecord.email}</h1>
            <h1 className="phone-number">08098556634</h1>
          </div>
          <div className="button-section">
            <button className="first-btn" onClick={toggleinsideModal}>
              Send Reward
            </button>
            <button className="second-btn">Send message</button>
          </div>
        </Modal>
      )}
      {insideModal && (
        <PaymentModal
          icon={paystack}
          title="Pay with Wallet Balance"
          closeModal={toggleinsideModal}
        >
          <div className="form-wrapper">
            <div className="form-style">
              <p className="p-tag">Amount</p>
              <input
                type="number"
                placeholder="Enter amount here..."
                className="input-size"
                value={amountToSend}
                onChange={(e) => {
                  setAmountToSend(e.target.value);
                  setAmountEnter(true); 
                }}
              />
            </div>
          </div>
          <div className="btn-new-div">
            <LoadingButton
              loading={loading}
              className="new-btn"
              onClick={() => sendReward(teacherRecord.id)}
            >
              {amountEntered ? `Send ${amountToSend}` : "Enter Amount"}
            </LoadingButton>
          </div>

          {successModal && (
            <SuccessModal>
              <div className="image-div">
                <img src={suceesful} alt="img" className="image-radius" />
              </div>
              <div className="header-div">
                <h1 className="header-class">Reward Sent Successfully</h1>
              </div>
              <div className="amount-class">
                <h1 className="amount-style">
                  You just sent{" "}
                  <span className="amout-coded">{amountToSend}</span> to{" "}
                  <span className="name-style">{teacherRecord.name}</span>
                </h1>
              </div>
              <div className="btn">
                <Button
                  className="btn-style"
                  onClick={() => {
                    collapseModal();
                    setAmountToSend(0);
                  }}
                >
                  Done
                </Button>
              </div>
            </SuccessModal>
          )}
        </PaymentModal>
      )}
      </StudentDashboard2>
      
     
     
    </>
  );
}
export default TeachersPage;
