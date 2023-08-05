import React, { useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import "./style.css";
import {
  Topbar,
  TopbarLeftSide,
  TopbarRighttSide,
  ImageWrapper,
  DashboardContainer,
  LeftSideBar,
  DashboardMainBody,
  SideBarLink,
} from "./Studentdashboard.style";
import axios from '../../api/axios'
import { getWalletBalance } from "./WalletBallance";
import LogoutButton from "../Modal/logout/Logout";
import ProfileDropdown from "../../components/ProfileDropdown";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import {Logout, PersonAdd, Settings} from "@mui/icons-material";
import ListItemIcon from "@mui/material/ListItemIcon";
import {Icon, MenuItem} from "@mui/material";

const StudentDashboard2 = ({ children, navItems , menu}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const handleBurger = () => setIsOpen(!isOpen);
  const handleCloseSideBar = () => setIsOpen(true);
  const [balance, setBalance] = React.useState(0);
  const [showForm, setShowForm] = React.useState(false);
  const [role, setRole] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "NGN",
  });

  React.useEffect(() => {
    getWalletBalance().then((res) => {
      setBalance(formatter.format(res));
    });

    if (localStorage.getItem("role") === "STUDENT") {
      setRole(true);
    } else if (localStorage.getItem("role") === "TEACHER") {
      setRole(false);
    }
    
    
  }, [balance]);
  const handlePaymentData = () => {
    setShowForm(!showForm);
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>

      <Topbar>
        <TopbarLeftSide>
          <ImageWrapper>
            <img src="/img/Frame 12.png" alt="" />
          </ImageWrapper>
          <h1>Reward your Teacher</h1>
          <span onClick={handleBurger}>
            <i className="fa fa-bars"></i>
          </span>
        </TopbarLeftSide>
        <TopbarRighttSide>
            <Tooltip title="Account settings">
              <Avatar
                  alt="Remy Sharp"
                  src="https://images.unsplash.com/photo-1591280063444-d3c514eb6e13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  sx={{ width: 46, height: 46  ,  ml: 2}}
                  onClick={handleClick}
                  size="small"
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
              />
            </Tooltip>
          <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                    marginY : 5
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: 'background.paper',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem sx={{ mt : 2 }}
                      component="a"
                      href={ role ? '/student-dashboard/update' : '/teacher-dashboard/update'}
            >
              <ListItemIcon>
                <PersonAdd fontSize="small" />
              </ListItemIcon>
              Account
            </MenuItem>
            <MenuItem sx={{ mt : 2 }}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              Settings
            </MenuItem>
            <MenuItem sx={{ mt : 2 }}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
          
          
          <h3>{ localStorage.getItem('name') }</h3>

        </TopbarRighttSide>
      </Topbar>
      <DashboardContainer>
        <LeftSideBar className={isOpen ? "closeSideBar" : "openSideBar"}>
          <ul>
            {navItems.map((item) => (
              <SideBarLink onClick={handleCloseSideBar} to={item.link}>
                <li>
                  <i className={item.icon}></i>
                  <p>{item.name}</p>
                </li>
              </SideBarLink>
            ))}
          </ul>
          <button onClick={() => setShowLogoutModal(true)}>
            <i className="fa fa-sign-out"></i>
            <p>Logout</p>
          </button>

          {showLogoutModal && (
            <LogoutButton
              closeModal={setShowLogoutModal}
              handleLogout={handleLogout}
            />
          )}
        </LeftSideBar>
        <DashboardMainBody>{children}</DashboardMainBody>
      </DashboardContainer>



    </>
  );
};

export default StudentDashboard2;
