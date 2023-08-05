import styled from "styled-components";
import { Link } from "react-router-dom";


export const DashboardContainer = styled.div`

`;
export const DashboardMainBody = styled.div`

  h2{
    border-bottom: 1px solid #D9D9D9;
    width: 80%;
    padding-bottom: .5rem;
  }
  .notifications {
    margin: 5% 0;
    p{
        margin: 0;
    }
    padding: 1rem;
    width: 720px;
    height: 74px;
    font-weight: 400;
    font-size: 14px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.04);
  }
  @media screen and (max-width: 768px) {
    min-width: 100vw;
    margin-left: 0;
  }
  h2 {
    font-family: "Inter";
    font-weight: 600;
    font-size: 32px;
    line-height: 39px;
    color: #03435f;
  }
`;

