import styled from 'styled-components';
export const ModalContainer = styled.div`
.Modal-content{
    width: 509px;
    height:300px;
    background-color: #fff;
    border-radius: 20px;
}
.Modal-header{
    position: relative;
    right: 57px;
    border-bottom: 3px solid #d9d9d9;
    display: flex;
    justify-content: center;
    left: 0;
    align-items: center;
    color: #03435f;
    font-family: Inter;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    height: 55px;
}
.Modal-header h1{
    font-size: 1.5rem;
};
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
.close-button{
    border: 0;
    right: 57px;
    background-color: transparent;
    font-size: 30px;
    cursor: pointer;
    position: absolute;
}
@media only screen and (max-width: 450px) {
    .Modal-content{
    width: 90vw;
    }
    .Modal-header h1{
    font-size: 1.2rem;
    padding-right: 1rem;
};
}
`