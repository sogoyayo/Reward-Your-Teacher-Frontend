import React, { useEffect, useState } from "react";
import Google from "../../assets/loginAssets/Google.svg";
import rewardlogo from "../../assets/loginAssets/rewardteacherlogo.svg";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  SignUpContainer,
  UserHeader,
  DemiHeader,
  PageBody,
  ImageWrapper1,
  GoogleSignUpBox,
  GoogleSignUpLink,
  InputBody,
  ButtonWrapper,
} from "./Form.style";
import { LineSection, AccountCheck } from "../userRedirectPage/Redirect.styled";
import LoadingButton from "@mui/lab/LoadingButton";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const initialValues = {
  name: "",
  email: "",
  password: "",
  school: "",
};

export default function Form2() {
  const [cont, setCont] = useState(false);
  const [schools, setSchools] = useState([]);
  const [values, setValues] = useState(initialValues);
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
        "http://localhost:5050/api/register-student",
        values,
        {
          headers: {
            Accept: "application/json",
          },
        }
      );
      navigate("/login");
    } catch (error) {
      setMessage(error.response.data.message);
      setSnackbarHandler(true);
    }
  };

  useEffect((url, config) => {
    axios
      .get("http://localhost:5050/api/schools/0/31/name")
      .then((response) => {
        setSchools(response.data.data.content);
      });
  }, []);

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
        <form className="signupForm" onSubmit={handleSubmit}>
          <div className="first" style={{ display: !cont ? "block" : "none" }}>
            <DemiHeader>
              <h3 className="signupuser">Sign Up as an old Student </h3>
            </DemiHeader>

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
              <label>Name of school</label>
              <select
                onChange={handleInputChange}
                className="input"
                name="school"
                placeholder="Type name of schools"
              >
                {schools.map((item) => (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </InputBody>

            <ButtonWrapper>
              <LoadingButton
                loading={loading}
                sx={{
                  ":hover": {
                    bgcolor: "success.main", // theme.palette.primary.main
                    color: "white",
                  },
                }}
                onClick={handleSubmit}
                className="btn"
                type="submit"
              >
                Sign up
              </LoadingButton>
            </ButtonWrapper>
            <LineSection>
              <span></span>
              <div>or</div> <span></span>
            </LineSection>
            <GoogleSignUpBox>
              <ImageWrapper1 style={{ background: "#fff" }}>
                <img src={Google} alt="" />
              </ImageWrapper1>
              <GoogleSignUpLink to="/"> Sign Up with Google</GoogleSignUpLink>
            </GoogleSignUpBox>
            <AccountCheck>
              <p>
                Already have an account?
                <Link
                  to="/login"
                  style={{ color: "#80B918", textDecoration: "none" }}
                >
                  {" "}
                  Sign In
                </Link>
              </p>
            </AccountCheck>
          </div>
        </form>
      </PageBody>
    </SignUpContainer>
  );
}
