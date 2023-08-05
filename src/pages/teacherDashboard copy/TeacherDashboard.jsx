import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { getTeacherWalletBalance, getTeacherMostRecentTransaction } from "./TeacherWalletBal";
import {
	Topbar,
	TopbarLeftSide,
	TopbarRighttSide,
	ImageWrapper,
	DashboardContainer,
	LeftSideBar,
	DashboardMainBody,
	SideBarLink,
	TopBoxSection,
	BottomBoxSection,
	GreenTop,
	TransactionDetails,
	TeacherWalletStyle,
} from "./Teacherdashboard.style";
import StudentDashboard2 from "../studentDashboard/StudentDashboard copy";
import { teacherDashBoard } from "../../Utility/DashboardUtilities";
const TeacherDashboard = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleBurger = () => setIsOpen(!isOpen);
	const handleCloseSideBar = () => setIsOpen(true);
	const [recentNotification, setRecentNotification] = useState([]);

	const [balance, setBalance] = React.useState(0);
	var formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "NGN",
	});
	React.useEffect(() => {
		getTeacherWalletBalance().then((res) => {
			setBalance(formatter.format(res));
		});
	}, [balance]);


	React.useEffect(() => {
		getTeacherMostRecentTransaction().then((res) => {
			console.log(res);
			setRecentNotification(res)
		});
	}, []);


	return (
		<StudentDashboard2 navItems={teacherDashBoard}>
			<TopBoxSection>
				<div>
					<h4>My Wallet Balance</h4>
					<p>Account is active</p>
				</div>
				<h1>{balance}</h1>
				<p>Total Money Received</p>

			</TopBoxSection>
			<TeacherWalletStyle>
				<div className="topTransanctionDiv">
					<div className="MostRecent">
						<p >Most Recent</p>
						<div className="newTextdiv">
							<p className="new">NEW</p>
						</div>
					</div>


					{
						recentNotification.length > 0 ? (
							recentNotification.map((item) => (

								<div className="transactionList">
									<div className="Trans">
										<p>{item.notificationBody}</p>
										<p id="date">{item.date}</p>
									</div>

									<div id="viewStudent">
										<p>View student</p>
									</div>
								</div>

							))
						) : (
							<h3>No Notification</h3>
						)
					}
				</div>
			</TeacherWalletStyle>
		</StudentDashboard2>

	);
};

export default TeacherDashboard;
