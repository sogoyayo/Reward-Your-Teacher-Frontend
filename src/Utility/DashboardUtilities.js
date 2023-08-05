
import {Logout, PersonAdd, Settings} from "@mui/icons-material";

export const studentDashBoard = [
    { name : "Overview", icon : "fa fa-school", link : "/student-dashboard" },
    { name : "Notification", icon : "fa fa-bell", link : "/student-dashboard/notification" },
    { name : "Message", icon : "fa fa-comment-dots", link : "/message" },
    { name : "School", icon : "fa fa-school", link : "/student-dashboard/schools" },
    { name : "Profile", icon : "fa fa-pencil", link : "/student-dashboard/update" },
]

export const teacherDashBoard = [
    { name : "Overview", icon : "fa fa-school", link : "/teacher-dashboard" },
    { name : "Notification", icon : "fa fa-bell", link : "/teacher-dashboard/notification" },
    { name : "Message", icon : "fa fa-comment-dots", link : "/teacher-dashboard/message" },
    { name : "Profile", icon : "fa fa-pencil", link : "/teacher-dashboard/update" },
]
export const studentMenuBar = [
    { name : "Account", icon : PersonAdd, link : "/student-dashboard/update" },
    { name : "Setting", icon : Settings },
    { name : "Logout", icon : Logout},
]
export const teacherMenuBar = [
    { name : "Account", icon : PersonAdd, link : "/teacher-dashboard/update" },
    { name : "Setting", icon : Settings },
    { name : "Logout", icon : Logout},
]

