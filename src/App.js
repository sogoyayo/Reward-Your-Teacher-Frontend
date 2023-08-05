
import './App.css';
import LandingPage from "./pages/indexPage";
import {useMediaQuery, useTheme} from "@mui/material";
import {Routes, Route, Link, BrowserRouter} from "react-router-dom";
import Login2 from './pages/login/Login2';
import Home from './pages/dashBoard/Home';
import RequiredAuth from "./pages/login/RequiredAuth";
import Body from './pages/allSchools/School';
import StudentDashboard from './pages/studentDashboard/StudentDashboard';
import FundWallet from './pages/studentDashboard/FundWallet';
import TeacherDashboard from './pages/teacherDashboard copy/TeacherDashboard';
import TeachersPage from './pages/TeachersPage';
import TeacherSignUp from './pages/userRegistration/TeacherSignUp';
import StudentSignUp from './pages/userRegistration/StudentSignUp';
import RedirectUser from './pages/userRedirectPage/RedirectUser';
import Notifications from './pages/notifications/Notification';
import StudentDashboard2 from './pages/studentDashboard/StudentDashboard copy';
import UpdateStudentPage from "./pages/update/UpdateStudentPage";
import UpdateTeacherPage from "./pages/update/UpdateTeacherPage";
import TeacherNotifications from './pages/notifications/TeacherNotification';
import Form3 from "./pages/login/StudentSocialLogin"



function App() {
    const theme = useTheme();
    const isMediumSize = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div className="App">
    
            <Routes>
                <Route exact path="/" element={<LandingPage isMediumSize={isMediumSize} />} />
                <Route exact path="/fund-wallet" element={  <FundWallet/> } />
                <Route exact path="/" element={  <LandingPage isMediumSize={isMediumSize} /> } />
                <Route exact path="/login" element={  <Login2 /> } />
                <Route exact path="/getAllWithPagination/1/10/:school" element={  < TeachersPage /> } />
                <Route exact path="/home" element={<Home/>}/>
                <Route exact path="/student-dashboard/schools" element={<Body />}/>
                <Route exact path="/student-dashboard" element={<RequiredAuth><StudentDashboard/></RequiredAuth>}/>
                <Route exact path="/teacher-dashboard" element={<RequiredAuth><TeacherDashboard/></RequiredAuth>}/>
                <Route exact path="/teachersignup" element={<TeacherSignUp/>}/>
                {/* <Route exact path= "/studentsignup" element={<StudentSignUp/>}/> */}
                <Route exact path= "/signup" element = {<RedirectUser/>}/>

                <Route exact path="/student-dashboard/update" element={<UpdateStudentPage />}/>
                <Route exact path="/teacher-dashboard/update" element={<UpdateTeacherPage />}/>
                <Route exact path= "/student-dashboard/notification" element = {<RequiredAuth><Notifications/></RequiredAuth>}/>
                <Route exact path= "/teacher-dashboard/notification" element = {<RequiredAuth><TeacherNotifications/></RequiredAuth>}/>
                <Route exact path="/peter" element={<StudentDashboard2/>}/>
                <Route exact path="/studentsignup" element={<Form3/>}/>
            


            </Routes>
  
    </div>
  );
}

export default App;
