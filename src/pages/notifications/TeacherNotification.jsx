import React, { useState } from "react";
import StudentDashboard2 from "../studentDashboard/StudentDashboard copy";
import { teacherDashBoard } from "../../Utility/DashboardUtilities";
import { DashboardContainer, DashboardMainBody } from "./Notification.style";

import axios from "../../api/axios";

const TeacherNotifications = () => {
  const [notification, setNotification] = useState([]);
  React.useEffect(() => {
    const getNotification = async () => {
      try {
        const response = await axios.get("/api/user-notification");
        console.log(response.data);
        setNotification(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getNotification();
  }, []);

  
  return (
    <>
      <StudentDashboard2 navItems={teacherDashBoard}>
        <DashboardContainer>
          <DashboardMainBody>
            <div className="notificationList">
              <h2>Notifications</h2>
              {notification.length > 0 ? (
                notification.map((item) => (
                  <div className="notifications">
                    <p>
                      <b>{item.date}</b>
                    </p>
                    <p>{item.notificationBody}</p>
                  </div>
                ))
              ) : (
                <h3>No Notification</h3>
              )}
            </div>
          </DashboardMainBody>
        </DashboardContainer>
      </StudentDashboard2>
    </>
  );
};
export default TeacherNotifications;
