import React  from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect} from "react";
import axios from "../../api/axios";
import Modal from "../Modal/Modal";
import Logout from "./Logout";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import {GoogleButtonContainer} from "./GoogleButton.styles";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [success, setSuccess] = useState(false);

  const clientId =
  "669087515281-a0umv7fjpl350e6c6nlko9m4ihcebsd5.apps.googleusercontent.com";

  const navigate = useNavigate();

  const baseURL = process.env.REACT_APP_API_URL;

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };
    gapi.load("client:auth2", initClient);
  });

  const socialLogin = async () => {
  
      const data = {
        email,
        name,
      };
      try {
        const response = await axios.post(`${baseURL}/api/auth/social-login`, data);
        console.log(response);
        
      } catch (error) {
        console.log(error);
      }
  
    };

  const onSuccess = async (res) => {
    console.log(res)
    setEmail(res.profileObj.email);
    setName(`${res.profileObj.familyName} ${res.profileObj.givenName}`);
    setSuccess(true);
    socialLogin();
    console.log("socail")
  }




  const x = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <div>
      <GoogleButtonContainer>
      <p>Welcome user</p>

      <GoogleLogin
              className="googlebutton"
              clientId={clientId}
              buttonText="Sign up with Google"
              onSuccess={onSuccess}
              // onFailure={onFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
            />




      <button onClick={() => setShowModal(true)}>Logout</button>

      {showModal && (
        <Logout
          closeModal={closeModal}
          handleLogout={x}
        />
      )}
      </GoogleButtonContainer>
    </div>
  );
};

export default Home;
