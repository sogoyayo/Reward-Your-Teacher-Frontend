import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const SignUpContainer = styled.div`

background: #E5E5E5;
margin:0px;
padding-bottom: 10rem;

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

`;

export const UserHeader = styled.div`

    margin-left: auto;
    margin-right: auto;
    text-align: center;
    padding-top: 2rem;
  `;

  export const DemiHeader = styled.div`
    display: flex;
    gap: 250px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
   
  .signupuser {
    height: 22px;
    font-family: "Inter";
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #21334f;
    flex: left;

  }
  
  `;

  export const PageNumber = styled.div`
    height: 22px;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #c6c3d4;
    flex: right;
   
  `;
  
export const PageBody = styled.div `
    width: 40%;
    height: 70%;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 10px;
    padding-bottom: 20px;

    .first {
  
  width: 100%;
  display: flex;
  justify-content: space-between ;
  background: #ffffff;
  margin-left: 50px;
  margin-right: 50px;
  padding-bottom: 1rem;
}
.signupForm {
  display: flex;
  justify-content: center;
  width: 100%;
  background: #ffffff;
  padding-top: 65px;
  
}
`;

export const InputBody = styled.div`
.input{
    box-sizing: border-box;
width: 100%;
height: 48px;
background: #FFFFFF;
border: 1px solid #D9D9D9;
margin-bottom: 20px;
margin-top: 3px;
padding-left: 10px;

//border: 2px solid black;
}  
 label{
    
    display: block;
    margin-bottom: 0.5rem;
    font-size: 13px;
    font-weight: bold;
    
  }
`;

export const ButtonWrapper = styled.div `
.btn {
box-sizing: border-box;
color: #ffffff;
font-weight: bold;
width: 100%;
height: 48px;
background: #55a630;
margin-top: 3%;

}
`;

export const GoogleSignUpLink = styled(Link)`
    text-decoration:none;
    font-family: 'Inter';
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #21334F;
    
`;
export const GoogleSignUpBox = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin:20px 0;
    gap:.5rem;
    border:  1px solid #D9D9D9;
    padding:20px;
    color:#21334F;
`;

export const ImageWrapper1 = styled.div`
    width:5%;
`;

  
