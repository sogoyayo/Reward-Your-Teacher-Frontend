import styled from "styled-components";

export const LoginContainer = styled.div`
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
:root {
  font-family: "Inter", sans-serif;
}
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  width: 100%;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #f5f5f5;
  font-family: "Inter", sans-serif;
  color: #21334f;
}

.login_container {
  background: #fff;
  padding: 4rem 7rem;
  width: 745px;
  height: 641px;
}

.login_container input {
  width: 500px;
  height: 48px;
  border: 1px solid #ccc;
  padding: 0 1rem;
  margin-bottom: 1rem;
}

.login_p {
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 5%;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  gap: 10px;
  color: #55a630;
  /* margin-top: 120px; */
  margin-bottom: 50px;
}

.logo h2 {
  font-weight: 500;
}

.login_block label {
  display: block;
  margin-bottom: 0.7rem;
  font-size: 12px;
}


.login_submit_button {
  width: 500px;
  height: 48px;
  border: 1px solid #ccc;
  margin: 2rem 0;
  margin-bottom: 1rem;
  background-color: #55a630;
  color: #fff;
  cursor: pointer;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
}

.or {
  display: flex;
  gap: 25px;
}

.or p {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  color: #21334f;
}

.google_signin_button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 48px;
  border: 1px solid #ccc;
  margin: 2rem 0;
  margin-bottom: 1rem;
  background-color: #fff;
  color: #21334f;
  cursor: pointer;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
}

::-webkit-input-placeholder {
  /* Edge */
  color: #c4c4c4;
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #c4c4c4;
}

::placeholder {
  color: #c4c4c4;
}

.google_signin_button img {
  margin-right: 15px;
}

.error {
  color: red;
  font-size: 12px;
  margin-bottom: 1rem;
  text-align: center;
  margin: 0 auto;
}

.login_forgot_password {
  text-decoration: none;
  color: #21334f;
  font-size: 12px;
}
.dont_have_account {
  padding-top: 20px;
  font-size: 12px;
  color: #21334f;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dont_have_account a {
  text-decoration: none;
  color: rgba(128, 185, 24, 1);
  font-size: 12px;
  margin-left: 5px;
}

@media screen and (max-width: 600px) {
  .logo{
    margin-top: 20px;
    margin-bottom: 5px; 
  }
  .login_container {
    padding: 1rem 2rem;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .login_container input {
    font-size: 1rem;  
    width: 100%;
  }
  .login_submit_button {
    width: 100%;
  }
  .google_signin_button {
    width: 100%;
  }
  .or {
    /* display: none; */
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 50%; */
  }
  /* .or p {
    text-align: center;

    
  } */
  .or img {
    width: 50%;
    display: none;
  }
}
`;


