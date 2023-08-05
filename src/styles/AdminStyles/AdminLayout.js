import styled from "styled-components";

export const AdminWrapper = styled.div`
& .sidebar{
    background-color: #fff;
    height: 100vh;
    width: 250px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    overflow-x: hidden;
    padding-top: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    & ul{
        list-style: none;
        padding: 0;
        & li{
            padding: 10px 20px;
            border-bottom: 1px solid #eee;
            & a{
                text-decoration: none;
                color: #000;
                font-size: 18px;
                font-weight: 500;
                &:hover{
                    color: #000;
                }
            }
        }
    }
}

& .mainPage{
    margin-left: 250px;
    padding: 20px;
    height: 100vh;
    background-color: #f1f1f1;
}
`