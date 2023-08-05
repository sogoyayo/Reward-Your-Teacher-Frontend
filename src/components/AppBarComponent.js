import React, {useState} from 'react';
import {
    AppBar,
    IconButton,
    Tab,
    Tabs,
    Toolbar,
    Typography,
} from "@mui/material";
import {
    ImageWrapper,
  } from "../pages/studentDashboard/Studentdashboard.style"
import MenuIcon from '@mui/icons-material/Menu';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import MobileDrawerComponent from "./MobileDrawerComponent";
import LandingPageButtonComponent from "./LandingPageButtonComponent";
import { Link, useNavigate } from 'react-router-dom';
const AppBarComponent = ({ isMediumSize }) => {
    const navigate = useNavigate();
    const[menuItems, setMenuItems] = useState(["Home" , "About", "Reward Your Teacher" , "Contact" ]);
    const[value, setValue] = useState();

    const[drawerControl, setDrawerControl] = useState(false);
  
    const closeDrawer = () => {
      setDrawerControl(false)
    }

    const route =( )=>{
        console.log("route")
        navigate('/login')
    }
    return (
        <AppBar  position="sticky" elevation={8} sx={{background: '#FFFFFF', color: '#55a630',   paddingX : isMediumSize ? 1 : 10}}>

            <Toolbar>
                {
                    isMediumSize ? (
                        <>
                            <MobileDrawerComponent action={closeDrawer} isOpen={drawerControl} menuItem={menuItems} />
                            <IconButton
                                onClick={() => setDrawerControl(true)}
                                sx={{mr:2, marginLeft :"auto"}}
                            >
                                <MenuIcon />
                            </IconButton></>
                    ) : (
                        <>
                                <ImageWrapper>
                                    <img src="/img/Frame 12.png" alt="" />
                                </ImageWrapper>
                            <Typography
                                variant='h6'
                                    color="inherit"
                                  sx={{ ml: 1 }}
                            >
                                Reward Your Teacher
                            </Typography>
                            <Tabs textColor="inherit" sx={{ml: 10 }} value={value} onChange={(e , value) => setValue(value) } indicatorColor="primary">
                                {
                                    menuItems.map((item , index) => (
                                        <Tab key={index} label={item} />
                                    ))
                                }
                            </Tabs>
                          
                             <LandingPageButtonComponent sx={{ ml : 30 }}  className="landingPageButton" to="/login" value="Login" />
                          
                            {/*<LandingPageButtonComponent value="Login" />*/}
                        </>
                    )
                }

            </Toolbar>
        </AppBar>
    );
};

export default AppBarComponent;
