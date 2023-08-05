import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Selectionwrapper = styled.div`
    display:grid;
    gap:10rem;
    background: #E5E5E5;
    padding-bottom: 10rem;
    
`;

export const LogoWrapper =styled.div`
    
     
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    padding-top: 2rem;
     h1{
        text-align: center;
        font-weight: 500px;
     font-size: 24px;     
     color: #55A630;
     }
`;
 


export const FormWrapper = styled.form`
    width:50%;
    margin-left: auto;
    margin-right: auto;
    //margin:auto;
   padding:7%;
    background:#fff;
    @media Screen and (max-width:768px){
        width:86%;
        
    }
`;
export const InputBox = styled.div`
    display:flex;
    flex-direction:column;
    margin:20px 0;
    gap:1rem;
    
    
    button{
        padding: 8px 16px;
        background: #55A630;
        border:none;
        padding:30px;
        color:#fff;
        margin-top:30px;
        font-size:20px;
        padding:20px;
        width:100%;
        
    }
     select {
        height: 67px;
        border: 1px solid #BDBDBD;
        left: 29.17%;
        right: 29.17%;
        top: 41.67%;
        bottom: 37.5%;
    }
`;
export const Input = styled.input`
    padding:20px;
    background: #FFFFFF;
    border: 1px solid #D9D9D9;
    font-size:18px;
`;
export const LineSection = styled.div`
    display:flex;
    justify-content:space-between;
    div{
        font-family: 'Inter';
        font-weight: 400;
        font-size: 18px;
        line-height: 15px;
    }
    span{
        border-top:  1px solid #D9D9D9;
        width:45%;
        height:1px;
        margin-top:10px;
        color:#21334F;
            }
`;

export const AccountCheck = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    p{
        font:Inter;
        font-weight:700;
        font-size:12px;
        line-height:14.52px;
        color:#21334F;
    }
    ${Link}{
        color:#80B918;
        text-decoration:none;
    }
`;