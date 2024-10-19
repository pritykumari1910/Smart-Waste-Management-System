import collegeImage from "../../assets/college.jpg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

import "./about.css";

export default function About() {
  const navigate = useNavigate();
  const fetchData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user === null) {
        navigate("/login");
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="about" id="about">
      <h2>About</h2>
      <div className="about-container">
        <div className="about-info">
          <p>
          Our Smart Waste Management System includes a real-time monitoring and alert system that ensures efficient waste collection and timely action. The system is equipped with sensors that continuously track the fill levels of garbage bins.

Alert Mechanism: When the fill level of a dustbin exceeds 75%, the system automatically triggers an alert. The bin's status turns red on the monitoring dashboard, signaling the need for immediate collection. Along with this visual cue, an automated alert message is sent to the waste management team, notifying them to take action before the bin overflows.

Normal Status: If the bin's fill level remains below 75%, it is displayed in green on the dashboard, indicating that the bin still has capacity and does not require immediate attention.
          </p>

          <p>
          This automated alert system helps optimize waste collection schedules by ensuring that bins are only collected when necessary, reducing operational costs and improving the efficiency of waste management operations. It also prevents overflow, contributing to cleaner and more hygienic public spaces.


          </p>
        </div>
        <div className="about-image">
          <img src={collegeImage} alt="College Image" />
        </div>
      </div>
    </div>
  );
}
