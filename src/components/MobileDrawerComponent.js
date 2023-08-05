import React, {useState} from 'react';
import {Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer} from "@mui/material";
import LandingPageButtonComponent from "./LandingPageButtonComponent";

const MobileDrawerComponent = ({action , isOpen , menuItem}) => {
    return (
       <SwipeableDrawer
       open={isOpen}
       onClose={action}
       >
        <List>
                {
                    menuItem.map((item , index) => (
                        <ListItem key={index}  disablePadding>
                            <ListItemButton>
                                <ListItemText  primary={item} />
                            </ListItemButton>
                        </ListItem>
                    ))
                }
        </List>
           <LandingPageButtonComponent value="Register"/>
           <LandingPageButtonComponent value="Login" />
       </SwipeableDrawer>
    );
};

export default MobileDrawerComponent;
