import React, {useEffect, useState} from 'react';
import AppBarComponent from "../../components/AppBarComponent";
import {Container, Drawer, Grid, InputLabel, MenuItem, Select, Snackbar, Stack, Typography} from "@mui/material";
import {Alert, Skeleton} from "@mui/lab";
import InputComponent from "../../components/InputComponent";
import SubmitButtonComponent from "../../components/SubmitButtonComponent";
import axios from  '../../api/axios';
import {teacherDashBoard} from "../../Utility/DashboardUtilities";
import StudentDashboard2 from "../studentDashboard/StudentDashboard copy";

const UpdateTeacherPage = () => {
    const [updateInputFields, setUpdateInputFields] = useState({ name : "" , school: "" , telephone : "", email : "" , schoolType: "" , teachingPeriod : "" });
    const [schools , setSchools] = useState([])
    const [token2 , setToken2] = useState("eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlbndlcmV2aW5jZW50QGdtYWlsLmNvbSIsImV4cCI6MTY2NTcxNDc3OSwiaWF0IjoxNjY1Njc4Nzc5fQ.mD-4zkEcuaZXR7QglhkYfz7V7P-OcmXtVuRPlt3f77Q")
    const[buttonLoading , setButtonLoading] = useState(false)
    const [alertMessage , setAlertMessage] = useState("")
    const [snackbar , setSnackbar] = useState(false)
    const [loadingState, setloadingState] = useState(false)
    let id = localStorage.getItem("userId");
    const update = (e) => {
        e.preventDefault()
        setButtonLoading(true)
        axios.put('/api/edit-teacherProfile' , updateInputFields , )
            .then(response => {
                console.log(updateInputFields)
                console.log(response)
                setButtonLoading(false)
                setSnackbar(true)
                setAlertMessage("Profile has been successfully Updated")
            })
    }
    //"/schools/{page}/{size}/{sortBy}"
    useEffect((url, config) => {
        axios.get('/api/view/' + id )
            .then(response => {
                setUpdateInputFields({
                    name : response.data.data.name,
                    telephone:  response.data.data.telephone,
                    school:  response.data.data.school,
                    email:  response.data.data.email,
                    schoolType: response.data.data.schoolType,
                    teachingPeriod: response.data.data.teachingPeriod
                })
                setloadingState(true)
                console.log(response)
            })

        axios.get('/api/schools/0/31/name' )
            .then(response => {
                console.log(response)
                setSchools(response.data.data.content)
            })

    }, [])
    return (
       <>
           <StudentDashboard2 navItems={teacherDashBoard}>
               <Snackbar anchorOrigin={{ vertical : 'top' , horizontal : 'right' }} open={snackbar} onClose={()=> setSnackbar(false)} autoHideDuration={6000}>
                   <Alert  severity="success" sx={{ width: '100%' }}  onClose={()=> setSnackbar(false)}>
                       { alertMessage }
                   </Alert>
               </Snackbar>
               <Container maxWidth="false" sx={{background :  "#FFFFFF" }}>
                   <Grid container sx={{ }}>
                       <Grid item xs={11} sm={11} md={4} lg={4} sx={{ height: "100%", mt : 2  }} alignItems="center" justifyContent="center">
                           <Typography variant="h4"  sx={{ mb : 4 , fontSize : '20px'}} textAlign="left">Profile</Typography>
                           <Typography sx={{ fontSize : '12px', fontWeight : '500px' }} variant="h5" textAlign="left">BASIC INFORMATION</Typography>
                           <Typography variant="h6"   sx={{ fontSize : '10px', mb : 2 }}  textAlign="left" color="grey">Only You Can View And Edit Your Profile</Typography>
                           {
                               loadingState ? (
                                   <form onSubmit={update}>
                                       <Typography variant="h6" component="caption" sx={{ fontSize : '12px' }} textAlign="left">Name</Typography>
                                       <InputComponent
                                           value={updateInputFields.name}
                                           action={(e)=> { setUpdateInputFields({...updateInputFields, name:  e.target.value })}}
                                           label="Enter Your Full name"
                                       />
                                       <Typography variant="h6" component="caption" sx={{ fontSize : '12px' , mt: 1 }} textAlign="left">Email</Typography>
                                       <InputComponent
                                           value={updateInputFields.email}
                                           action={(e)=> {setUpdateInputFields({ ...updateInputFields, email : e.target.value})}}
                                           label="Enter A valid Email Address" />
                                       <Typography variant="h6" component="caption" sx={{ fontSize : '12px'  ,mt: 1}} textAlign="left">Phone</Typography>
                                       <InputComponent
                                           value={updateInputFields.telephone}
                                           action={(e)=> {setUpdateInputFields({...updateInputFields , telephone: e.target.value})}}
                                           label="Telephone" />
                                       <InputLabel sx={{ fontSize : '12px'  ,mt: 1}} id="school">School </InputLabel>
                                       <Select
                                           sx={{  mb : 2 }}
                                           fullWidth
                                           labelId="school"
                                           id="demo-select-small"
                                           value={updateInputFields.school}
                                           label="Select School"
                                           onChange={(e)=> {setUpdateInputFields({...updateInputFields , school :e.target.value})}}
                                       >
                                           {
                                               schools.map(item=>(
                                                   <MenuItem key={item.id} value={item.name}>{item.name}</MenuItem>
                                               ))
                                           }
                                       </Select>
                                       <InputLabel sx={{ fontSize : '12px'  ,mt: 1}} id="demo-select-small">School Type</InputLabel>
                                       <Select
                                           sx={{  mb : 2 }}
                                           fullWidth
                                           labelId="demo-select-small"
                                           id="demo-select-small"
                                           value={updateInputFields.schoolType}
                                           label="School Type"
                                           onChange={(e)=> {setUpdateInputFields({...updateInputFields , schoolType :e.target.value})}}
                                       >
                                           <MenuItem value="PRIMARY">Primary School</MenuItem>
                                           <MenuItem value="SECONDARY">Secondary School</MenuItem>
                                       </Select>
                                       <Typography variant="h6" component="caption" sx={{ fontSize : '12px'  ,mt: 1}} textAlign="left">Period</Typography>
                                       <InputComponent
                                           value={updateInputFields.teachingPeriod}
                                           action={(e)=> {setUpdateInputFields({...updateInputFields , teachingPeriod :e.target.value})}}
                                           sx={{  mb : 2 }} label="Teaching Period"
                                       />
                                       <SubmitButtonComponent loading={buttonLoading} />
                                   </form>
                               ): (
                                   <>
                                       <Stack>
                                           <Skeleton variant="rectangular" width={500} height={750} />
                                       </Stack>
                                   </>
                               )
                           }
                       </Grid>
                       <Grid item xs={12} sm={12} md={3} lg={3} sx={{ height: "100%", mt : 15  }} alignItems="center" justifyContent="center">

                       </Grid>

                   </Grid>
               </Container>
           </StudentDashboard2>
       </>
    );
};

export default UpdateTeacherPage;
