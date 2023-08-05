import styled from "styled-components";
export const LogoutModal = styled.div`
  .Modal-content {
    width: 590px;
    height: 200px;
    background-color: #fff;
    font-family: "Inter", sans-serif;
  }
  .Modal-header {
    position: relative;
    border-bottom: 1px solid #e8e7e7;
    display: flex;
    left: 0;
    text-align: center;
    padding: 1rem 1rem 0rem 1rem;
    border-radius: 3px;
    align-items: center;
    color: #03435f;
    background-color: #fff;
    font-family: Inter;
    font-style: normal;
    font-weight: 700;
  }
  .Modal-footer {
    padding: 1rem;
    padding-right: 4rem;
    display: flex;
    justify-content: flex-end;
  }
  .Modal-footer button {
    border-radius: 4px;
    border: none;
    float: right;
    gap: 1rem;
    text-align: center;
    font-size: 16px;
    width: 60px;
    height: 30px;
    font-family: "Inter";
    font-style: normal;
    text-align: center;
   
    
  }

  #yes {
    background-color: #55a630;
    color: #fff;
   
    margin: 0 0.7rem;
    margin-left: 1rem;
    gap: 10px;
  
  }

  .Modal-body {
    font-size: 1rem;
    color: #03435f;
    padding: 1rem;
  }

  .Modal-Area {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.3);
  }

  /* @media only screen and (max-width: 450px) {
    .Modal-content {
      width: 90vw;
    }
    .Modal-header h1 {
      font-size: 1.2rem;
      padding-right: 1rem;
    }
  } */
`;
