import styled from 'styled-components'

export const BodyStyle = styled.div `
.rewardBody {
    /* display: flex;
    flex-direction: column;
    padding: 10px 0 0 60px; */
   
}

.title h2 {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    margin-top: 20px;
    line-height: 39px;
    color: #03435F;
    margin-bottom: 10px ;
}
.search {
    display: flex;
}
.form {
    flex: 85%;
}

form {
    color: #555;
    display: flex;
    padding: 2px;
    border: 1px solid currentColor;
}

input[type="search"] {
    border: none;
    outline: none;
    
    // background: transparent;
    margin: 0;
    font-size: 14px;
    width: 100%;
    padding: 12px 10px;
    border-radius: none;
    // color: inherit;
   
    // border-radius: inherit;
  }
  
  input[type="search"]::placeholder {
    color: #bbb;
  }
  button[type="submit"] {
    text-indent: -999px;
    overflow: hidden;
    width: 40px;
    padding: 0;
    margin: 0;
    border: none;
    outline: none;
    
    background: transparent url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' class='bi bi-search' viewBox='0 0 16 16'%3E%3Cpath d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'%3E%3C/path%3E%3C/svg%3E") no-repeat center;
    cursor: pointer;
    opacity: 0.7;
  }
  

.filter {
    flex: 15%;
    display: flex;
    justify-content: flex-end;
}

.holder {
    border: 1px solid currentColor;
    display: flex;
    justify-content: space-around;
    width: 80%;
    padding: 4px 10px;
    align-items: flex-end;
}

.holder .filterIcon{
    // margin-left: 10px
}

.holder > div p {
    line-height: 0;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    margin-top: -18px;
    color: #03435F;
}

.holder > div img {
    width: 23px;
    padding-bottom: 5px;
    //margin-top: 36px !important;
}

.table {
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 190px;
}
  
  table {
    border-collapse: collapse;
    width: 100%;
  }
  
  th, td {
    padding: 15px 16px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  .table-head{
    background: rgba(0, 0, 0, 0.04);
    
    width: 926px;
    height: 40px;
    left: 380px;
    top: 316px;
  }

  /* Pagination links */
.pagination {
    position: absolute;
    bottom: 5rem;
    left: 50%;
    margin-top: -30px !important;
    transform: translate(-50%, -50%);
    margin-bottom: -150px;
}
.pagination a {
    color: black;
    float: left;
    padding: 0.5rem 1rem;
    text-decoration: none;
    transition: background-color .3s;
  }
  /* Style the active/current link */
  .pagination a.active {
    background-color: dodgerblue;
    color: white;
  }
  /* Add a grey background color on mouse-over */
  .pagination a:hover:not(.active) {
    background-color: #ddd;
}

.schoolName{
    text-decoration: none;
    color: black;
}

`