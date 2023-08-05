import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Topbar = styled.div`
    padding:1% 3%;
    display: flex;
    justify-content: space-between;
    height: 80px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    z-index: 1000;
    position: fixed;
    width: 100%;
    background-color: #fff;
`;

export const TopbarLeftSide = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    h1{
        font-family: 'Inter';
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        color: #55A630;

        @media screen and (max-width:768px){
            display: none;
        }
    }
    span{
        display: none;
        @media screen and (max-width:768px){
            display: block;
        }
    }

`;
export const TopbarRighttSide = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    h3{
        font-family: 'Inter';
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #012A4A;
    }

`;
export const ImageWrapper = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;

    img{
        height: 100%;
        width: 100%;
        border-radius: 50%;

    }
    @media screen and (max-width:768px){
        width: 40px;
        height: 40px;
    }

    

`;
export const DashboardContainer = styled.div`
    width: calc(100% - 300px);
    /* z-index: -1; */
    background-color: #fff;
    position: relative;
    display: flex;
    top: 80px;
   
`;

export const LeftSideBar = styled.div`

    

    @media screen and (min-width:768px){
     padding: 30px 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    position: fixed;
    height: calc(100% - 80px);
    width: 300px;
    z-index: 1000;
    }

      
      /* background-color: #fff; */
  
      ul{
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      ul li{
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 15px 15px;
        font-family: 'Inter';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #03435F;
        :hover{
            color: white;
            background-color: #55A630;
        }

      }
      button{
        display: flex;
        align-items: center;
        width: 100%;
        background: rgba(128, 185, 24, 0.1);
        color:#55A630;
        border:none;
        padding:10px;
        font-family: 'Product Sans';
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
      }

`;
export const SideBarLink = styled(Link)`
    text-decoration: none;
    :hover{
        color: white;
        background-color: #55A630;
    }
    :active{
        color: white;
        background-color: #55A630; 
    }
`;
export const DashboardMainBody = styled.div`
        display: grid;
        gap: 2rem;
        min-width: calc(100vw - 300px);
        margin-left: 300px;
        position: relative;
        padding: 5% 7%;
        @media screen and (max-width:768px){
            min-width: 100vw;
            margin-left: 0;
            
        }
        h2{
            font-family: 'Inter';
            font-weight: 600;
            font-size: 32px;
            line-height: 39px;
            color: #03435F;
        }
`;
export const TopBoxSection = styled.div`
    background-image: url("img/Ellipse 43.png");
    background-repeat: no-repeat;
    background-position: right;
    background-size: contain;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.04);
    padding: 3% 6%;
    display: grid;
    width: 90%;
    gap: 1rem;
    div{
        display: flex;
        justify-content: space-between;
    }
    div p{
        padding: 5px;
        background-color: #fff;
        border-radius: 20px;
    }
    >div h4{
        font-family: 'Inter';
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: #55A630;
    }
    >div h1{
        font-family: 'Inter';
        font-weight: 700;
        font-size: 40px;
        line-height: 48px;
        color: #03435F;
    }
    button{
        width: 30%;
        border: none;
        background-color: #55A630;
        padding: 10px;
        color:#fff;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        gap: 0.5rem;
        @media screen and (max-width:768px){
            width: 100%;
        }
    }
`;

export const BottomBoxSection = styled.div`
        box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.04);
        padding-bottom: 3%;
        width: 90%;

`;

export const GreenTop = styled.div`
    background-image: url("img/Frame 8697.png");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 80px;

`;
export const TransactionDetails = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 6% 6% 3% 6%;
    h4{
        font-family: 'Inter';
        font-weight: 600;
        font-size: 16px;
        line-height: 19px;
        color: #03435F;
    }
    h1{
        font-family: 'Inter';
        font-weight: 700;
        font-size: 32px;
        line-height: 39px;
        color: #03435F;
    }
    p{
        background: rgba(128, 185, 24, 0.1);
        border-radius: 50px;
        text-align: center;
        padding:0px 3px;
        width: 50px;
    }

    div{
        display: grid;
        gap: 1rem;
    }
    span{
        background: rgba(128, 185, 24, 0.1);
        /* padding: 20px; */
        display: flex;
        align-items: center;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        justify-content: center;

    }
    

`;
export const TeacherWalletStyle = styled.div`
    
   
    width: 90%;
    /* height: 360px; */
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.04);
    padding: 3% 6% 3% 3%;
    .MostRecent{
        font-weight: 600;
        font-size: 1.5 rem;
        color: #03435F;
        border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        display: flex;
        justify-content: space-between;
        .new{
            color: #FFFFFF;
            background-color: #55a630;
            width: 55px;
            height: 39px;
            border-radius: 40%;
            font-size: 1rem;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2%;
        }
    }
    .transactionList{
        padding-top: 1.5%;
        padding-bottom: 1.5%;
        /* border: 2px solid red; */
        display: flex;
        font-size: 14px;
        color:#03435F;
        justify-content: space-between;
        width: 100%;

        .Trans{
          width: 70% ;
            p{
                margin: 0;
                font-size: 14px;
            }
            #date{
                color:  #C4C4C4;
            }
        }
        #viewStudent{
            font-weight: 400;
            font-size: 14px;
            width: 15%;
            color: #55A630;
            background: rgba(128, 185, 24, 0.1);
            border-radius: 30%;
            height: 30px;
            display: flex;
            justify-content: center;
            padding: 5px 5px;
            gap: 10%;
        }
    }
`;

