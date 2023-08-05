import React, { useEffect, useState, useRef } from "react";
import { BodyStyle } from "./School-style";
import filterIcon from "./Filter.png";
import { studentDashBoard } from "../../Utility/DashboardUtilities";
import { Grid, Container } from "@mui/material";
import axios from "../../api/axios";
import { height } from "@mui/system";
import StudentDashboard2 from "../studentDashboard/StudentDashboard copy";

const Body = () => {
  const [schools, setSchool] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [searchKey, setSearchKey] = useState(" ");

  const searchRef = useRef(" ");

  const showpage = (e) => {
    e.preventDefault();
    setPageNumber(e.target.innerText - 1);
  };
  let pages = [];

  for (let i = 1; i < totalPages; ++i) {
    pages.push(
      <a onClick={showpage} key={i}>
        {i}
      </a>
    );
  }
  const fetchSchools = async () => {
    try {
      const url = `/api/schools/${pageNumber}/5/name`;
      const response = await axios.get(url).then((response) => {
        const allSchools = response.data.data.content;
        setSchool(allSchools);
        setTotalPages(response.data.data.totalPages);
        console.log(response.data.data.totalPages);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const lastPageNum = totalPages - 1;
  console.log("write", lastPageNum);
  const nextPage = () => {
    setPageNumber((prevState) => {
      return prevState + 1;
    });
    console.log("here", pageNumber);
    console.log("nextpage");
  };
  const previousPage = () => {
    setPageNumber((prevState) => {
      return prevState - 1;
    });
    console.log("prevpage");
  };

  useEffect(() => {
    fetchSchools();
  }, [pageNumber, searchKey]);

  const handleChange = (e) => {
    setSearchKey(searchRef.current.value);
  };

  return (
    <>
      <StudentDashboard2 navItems={studentDashBoard}>
        <BodyStyle>
          <div className="rewardBody">
            <div className="title">
              <h2>All Schools</h2>
            </div>
            <div className="search">
              <div className="form">
                <form>
                  <input
                    type="search"
                    placeholder="Search..."
                    ref={searchRef}
                    onChange={handleChange}
                    value={searchKey.searchTerm}
                    name="searchTerm"
                  ></input>
                  <button type="submit">Search</button>
                </form>
              </div>
              <div className="filter">
                <div className="holder">
                  <div>
                    <p>Filter</p>
                  </div>
                  <div className="filterIcon">
                    <img src={filterIcon} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="table">
              <table>
                <thead>
                  <tr className="table-head">
                    <th>List of Schools</th>
                  </tr>
                </thead>
                <tbody>
                  {schools.map((school, index) => {
                    return (
                      <tr key={school.id}>
                        <td>
                          <a
                            className="schoolName"
                            href={"/getAllWithPagination/1/10/" + school.name}
                          >
                            {school.name}
                          </a>
                        </td>

                        {/* <td>
                            <IoIosArrowForward />
                            </td> */}
                      </tr>
                    );
                  })}
                </tbody>

                <div className="pagination">
                {/* <a onClick={() => setPageNumber(nextPage)}>prev</a> */}
                  <a onClick={previousPage}>{/* &laquo; */}</a>
                  {pages}
                  <a>...</a>
                  <a onClick={() => setPageNumber(lastPageNum)}>Last</a>
                  <a onClick={nextPage}>{/* &raquo; */}</a>
                </div>
              </table>
            </div>
          </div>
        </BodyStyle>
      </StudentDashboard2>
    </>
  );
};
export default Body;
