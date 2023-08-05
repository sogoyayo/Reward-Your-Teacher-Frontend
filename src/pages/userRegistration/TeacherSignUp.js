import React, { useEffect, useState } from "react";
import rewardlogo from "../../assets/loginAssets/rewardteacherlogo.svg";
import axios from "axios";
import {
  SignUpContainer,
  UserHeader,
  PageNumber,
  DemiHeader,
  PageBody,
  InputBody,
  ButtonWrapper,
} from "./Form.style";
import { Link, useNavigate } from "react-router-dom";
import LoadingButton from "@mui/lab/LoadingButton";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const initialValues = {
  name: "",
  email: "",
  password: "",
  school: "",
  teachingPeriod: "",
  subjectList: "",
  schoolType: "",
};

export default function Form() {
  const [cont, setCont] = useState(false);
  const [schools, setSchools] = useState([]);
  const [x, setX] = useState(1);
  const [values, setValues] = useState(initialValues); // to set all the values of the form
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [snackbarHandler, setSnackbarHandler] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setSnackbarHandler(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);

    try {
      const response = await axios.post(
        "http://localhost:5050/api/register-teacher",
        values,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/login");
    } catch (error) {
      setMessage(error.response.data.message);
      setSnackbarHandler(true);
    }
  };
  const handleChange = (e) => {
    for (let item in e) {
      setValues(...values, { subjectList: item });
    }
  };

  useEffect((url, config) => {
    axios
      .get("http://localhost:5050/api/schools/0/31/name")
      .then((response) => {
        setSchools(response.data.data.content);
      });
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    cont ? setX(1) : setX(2);
    setCont(!cont);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <SignUpContainer>
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
      <UserHeader className="header">
        <img src={rewardlogo} alt="Logo" />
      </UserHeader>

      <PageBody className="pageBody">
        <DemiHeader className="demihead">
          <h3 className="signupuser">Sign up as a teacher</h3>
          <PageNumber className="pagenumber">STEP {x} OF 2</PageNumber>
        </DemiHeader>

        <form className="signupForm" onSubmit={handleSubmit}>
          <div className="first" style={{ display: !cont ? "block" : "none" }}>
            <InputBody>
              <label>Name</label>
              <input
                onChange={handleInputChange}
                className="input"
                type="text"
                placeholder="Enter name"
                name="name"
                required
              />
            </InputBody>
            <InputBody>
              <label>Email</label>
              <input
                onChange={handleInputChange}
                className="input"
                type="email"
                placeholder="Enter email"
                name="email"
                required
              />
            </InputBody>

            <InputBody>
              <label>Password</label>
              <input
                type="password"
                className="input"
                placeholder="Enter your password"
                name="password"
                onChange={handleInputChange}
                required
              />
            </InputBody>
            <InputBody>
              <label>Schools where you taught</label>
              <select
                onChange={handleInputChange}
                className="input"
                name="school"
                placeholder="Type name of schools"
              >
                <option value="">Select school</option>
                {schools.map((item) => (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </InputBody>

            <ButtonWrapper>
              <button className="btn" onClick={handleClick}>
                Continue
              </button>
            </ButtonWrapper>
          </div>

          <div className="first" style={{ display: cont ? "block" : "none" }}>
            <InputBody>
              <label>Years of Teaching</label>
              <input
                onChange={handleInputChange}
                className="input"
                type="text"
                name="teachingPeriod"
                placeholder="e.g 1993 - 2000"
              />
            </InputBody>

            <InputBody>
              <label>Subjects Taught</label>
              <select
                onChange={handleInputChange}
                className="input"
                name="subjectList"
              >
                <option value=""></option>
                <option value="Mathematics">Mathematics</option>
                <option value="English">English</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Physics">Physics</option>
                <option value="Yoruba">Yoruba</option>
                <option value="Integrated Science">Integrated Science</option>
                <option value="Foods and Nuts">Foods and Nuts</option>
                <option value="Social Studies">Social Studies</option> *
              </select>
            </InputBody>

            <InputBody>
              <label>School Type</label>
              <select
                onChange={handleInputChange}
                className="input"
                name="schoolType"
              >
                <option value="">Select school type </option>
                <option>PRIMARY</option>
                <option>SECONDARY</option>
              </select>
            </InputBody>

            <Link
              to="/login"
              className="btn"
              onClick={handleClick}
              style={{ color: "#80B918", textDecoration: "none" }}
            >
              Back
            </Link>

            <ButtonWrapper>
              <LoadingButton
                onClick={handleSubmit}
                className="btn"
                type="submit"
                sx={{
                  ":hover": {
                    bgcolor: "success.main",
                    color: "white",
                  },
                }}
              >
                Sign up
              </LoadingButton>
            </ButtonWrapper>
          </div>
        </form>
      </PageBody>
    </SignUpContainer>
  );
}
