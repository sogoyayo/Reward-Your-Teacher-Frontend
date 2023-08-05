import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";

import rytpe1 from "../assets/image/rytpe-1.png";
import rytpe2 from "../assets/image/rytpe-2.png";
import rytpe3 from "../assets/image/rytpe-3.png";
import rytpe4 from "../assets/image/rytpe-4.png";
import rytpe5 from "../assets/image/rytpe-5.png";
import "../App.css";
import LandingPageButtonComponent from "../components/LandingPageButtonComponent";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { step, teacherRoles } from "../Utility/landingPageUtils";
import AppBarComponent from "../components/AppBarComponent";



const LandingPage = ({ isMediumSize }) => {
  const [steps, setSteps] = useState(step);
  const [ShowModal, setShowModal] = useState(false);
  const [insideModal, setInsideModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!ShowModal);
  };
  const toggleinsideModal = () => {
    setInsideModal(!insideModal);
  };
  return (
    <>
      <AppBarComponent isMediumSize={isMediumSize} />
      <Paper >
        <Container maxWidth="md" sx={{ height: "100%" }}>
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item xs={12} sm={12} md={6} lg={6} sx={{ height: "100%" }}>
              <Typography
                textAlign="left"
                className="heroText"
                sx={{ color: "#55a630" }}
                component="h1"
                variant="h3"
              >
                Send Instant Heartfelt Rewards to Your Teachers
              </Typography>
              <Typography
                variant="h5"
                textAlign="left"
                sx={{ fontSize: "18px", mt: 2 }}
              >
                A digital platform that digitizes the process of sending funds
                to teachers who have done their work with emphatic kindness.
              </Typography>
              <Box
                alignItems="center"
                className="cta"
                justifyContent="space-between"
                onClick={toggleModal}
              >
                <LandingPageButtonComponent
                  sx={{ background: "#55a630", mt: 2, mr: 10 }}
                  value="Get Started"
                  to="/signup"
                />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <img
                alt="heroImage"
                className={isMediumSize ? "rytpe1" : ""}
                src={rytpe1}
              />
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Paper sx={{ background: "#FFF2EB99", py: 10 }}>
        <Container maxWidth="md">
          <Typography
            fontWeight="600"
            textAlign="left"
            component="h2"
            variant="h5"
          >
            {" "}
            How It Works{" "}
          </Typography>
          <Typography
            sx={{ fontSize: "14px" }}
            variant="h6"
            component="p"
            textAlign="left"
          >
            {" "}
            The Easiest way to show you care
          </Typography>
          <Grid container justifyContent="space-between">
            <Grid justifySelf="left" item xs={12} sm={12} md={6} lg={6}>
              <Timeline>
                {steps.map((item) => (
                  <TimelineItem key={item.step} sx={{}}>
                    <TimelineSeparator>
                      <TimelineDot variant="outlined" color="success" />
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                      <Typography variant="h6" sx={{ fontSize: "10px", mb: 1 }}>
                        {item.step}
                      </Typography>
                      <Typography
                        variant="h5"
                        sx={{ fontSize: "18px", color: "#55a630", mb: 2 }}
                      >
                        {item.instruction}
                      </Typography>
                      <Typography variant="h6" sx={{ fontSize: "14px" }}>
                        {item.detail}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                ))}
              </Timeline>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <img alt="rytpe-2" src={rytpe2} />
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Paper sx={{ background: "#55a630", pt: 5 }}>
        <Container maxWidth="md">
          <Grid
            container
            sx={{ height: "100%" }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={12} sm={12} md={6} lg={6} sx={{ height: "100%" }}>
              <Typography
                textAlign="left"
                className="heroText"
                sx={{ color: "#FFFFFF", fontSize: "24px" }}
                component="h1"
                variant="h3"
              >
                Send Surprise Rewards To Your Teacher Today
              </Typography>
              <Typography
                variant="h5"
                textAlign="left"
                sx={{ fontSize: "14px", mt: 2, color: "#FFFFFF" }}
              >
                A digital platform that digitizes the process of sending funds
                to teachers who have done their work with emphatic kindness.
              </Typography>
              <Box
                alignItems="center"
                className="cta"
                justifyContent="space-between"
              >
                <LandingPageButtonComponent
                  sx={{
                    background: "#FFFFFF",
                    mt: 2,
                    mr: 10,
                    color: "#55a630",
                  }}
                  value="Get Started"
                  to="/signup"
                />
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={{ height: "100%" }}
              alignItems="baseline"
            >
              <img alt="rytpe-2" src={rytpe3} />
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Paper sx={{ background: "#F7F7F7", py: 5 }}>
        <Container maxWidth="md">
          <Typography
            fontWeight="600"
            textAlign="left"
            sx={{ fontSize: "18px" }}
            component="h2"
            variant="h5"
          >
            {" "}
            The Teacher's Reward Should{" "}
          </Typography>
          <Typography
            fontWeight="600"
            textAlign="left"
            sx={{ fontSize: "18px" }}
            component="h2"
            variant="h5"
          >
            {" "}
            no longer be in Heaven{" "}
          </Typography>
          <Grid
            container
            sx={{ height: "100%" }}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item xs={12} sm={12} md={6} lg={6} sx={{ height: "100%" }}>
              {teacherRoles.map((item, index) => (
                <Typography
                  key={index}
                  textAlign="left"
                  sx={{ fontSize: "14px" }}
                  variant="h6"
                >
                  {item}
                </Typography>
              ))}
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              sx={{ height: "100%" }}
              alignItems="baseline"
            >
              <img alt="rytpe-2" className="rytpe4" src={rytpe4} />
            </Grid>
          </Grid>
        </Container>
      </Paper>
      <Paper sx={{ background: "#FFFFFF", py: 10 }}>
        <Container maxWidth="md">
          <Typography
            fontWeight="600"
            sx={{ fontSize: "18px", mb: 4 }}
            component="h2"
            variant="h5"
          >
            {" "}
            Our Patners{" "}
          </Typography>
          <img alt="rytpe-2" className="rytpe5" src={rytpe5} />
        </Container>
      </Paper>
      <Paper sx={{ background: "#000000", pt: 10, color: "#FFFFFF" }}>
        <Container maxWidth="md">
          <Typography
            fontWeight="600"
            sx={{ fontSize: "18px", mb: 4, color: "white" }}
            component="h2"
            variant="h5"
          >
            {" "}
            Reward Your Teacher{" "}
          </Typography>
          <Tabs textColor="inherit" sx={{ ml: 25, mb: 5 }}>
            <Tab label="Home" />
            <Tab label="About" />
            <Tab label="Reward Your Teacher" />
          </Tabs>
          <hr color="grey" />
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Typography
                variant="h6"
                textAlign="left"
                sx={{ fontSize: "10px", mb: 4, color: "white" }}
              >
                © {new Date().getFullYear()} Reward Your Teacher
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
              <LinkedInIcon sx={{ ml: 35 }} fontSize="10px" />
              <FacebookIcon fontSize="10px" />
              <InstagramIcon fontSize="10px" />
            </Grid>
          </Grid>
        </Container>
      </Paper>
      
   
    </>
  );
};

export default LandingPage;
