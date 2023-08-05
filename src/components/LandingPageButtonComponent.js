import React from 'react';
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import '../App.css';
const LandingPageButtonComponent = ({value , sx , className , to }) => {

    return (
        <Link to={to} style={{ textDecoration : 'none' }}>
              <Button variant="contained" color='success' to={to} className={className}  sx={sx} >{value}</Button>
        </Link>
    );
};

export default LandingPageButtonComponent;
