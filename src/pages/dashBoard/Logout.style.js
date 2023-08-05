import styled from "styled-components";
export const LogoutModal = styled.div`
  .Modal-content {
    width: 590px;
    height: 200px;
    background-color: #fff;
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
    padding-left: 2rem;
  }
  .Modal-footer button {
    padding: 0.2rem 1.5rem;
    border-radius: 3px;
    border: none;
    float: right;
    gap: 1rem;
  }

  #yes {
    background-color: #55a630;
    color: #fff;
    border-radius: 4px;
    margin: 0 0.7rem;
    margin-left: 1rem;
    margin-right: 3rem;
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

  @media only screen and (max-width: 450px) {
    .Modal-content {
      width: 90vw;
    }
    .Modal-header h1 {
      font-size: 1.2rem;
      padding-right: 1rem;
    }
  }
`;
