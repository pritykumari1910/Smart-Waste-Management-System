import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { About, Footer } from "../../components";

import { app } from "../firebase";
import { getDatabase, onChildAdded, ref } from "firebase/database";

import "./home.css";

const database = getDatabase(app);

const binAddresses = {
  bins01:
    "https://www.google.com/maps/place/Shivalik+College,+Dehradun/@30.335928,77.870031,10z/data=!4m6!3m5!1s0x390f2a7095b0a67b:0xc2f54efbde26299!8m2!3d30.3359277!4d77.8700308!16s%2Fg%2F1hdzg9j_d?hl=en-US&entry=ttu",
  bins02:
    "https://www.google.com/maps/place/Shivalik+College,+Dehradun/@30.335928,77.870031,10z/data=!4m6!3m5!1s0x390f2a7095b0a67b:0xc2f54efbde26299!8m2!3d30.3359277!4d77.8700308!16s%2Fg%2F1hdzg9j_d?hl=en-US&entry=ttu",
  bins03:
    "https://www.google.com/maps/place/Shivalik+College,+Dehradun/@30.335928,77.870031,10z/data=!4m6!3m5!1s0x390f2a7095b0a67b:0xc2f54efbde26299!8m2!3d30.3359277!4d77.8700308!16s%2Fg%2F1hdzg9j_d?hl=en-US&entry=ttu",
  bins04:
    "https://www.google.com/maps/place/Shivalik+College,+Dehradun/@30.335928,77.870031,10z/data=!4m6!3m5!1s0x390f2a7095b0a67b:0xc2f54efbde26299!8m2!3d30.3359277!4d77.8700308!16s%2Fg%2F1hdzg9j_d?hl=en-US&entry=ttu",
  bins05:
    "https://www.google.com/maps/place/Shivalik+College,+Dehradun/@30.335928,77.870031,10z/data=!4m6!3m5!1s0x390f2a7095b0a67b:0xc2f54efbde26299!8m2!3d30.3359277!4d77.8700308!16s%2Fg%2F1hdzg9j_d?hl=en-US&entry=ttu",
};

export default function Home() {
  const [binsData, setBinsData] = useState({});

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

    const fetchBinsData = () => {
      // console.log("Fetching bins");
      const binsRefs = [
        {
          ref: ref(database, "bins"),
          statusKey: "STATUS01",
          bin: "Drywaste01",
        },
        {
          ref: ref(database, "bins01"),
          statusKey: "STATUS02",
          bin: "Wetwaste01",
        },
        {
          ref: ref(database, "bins02"),
          statusKey: "STATUS03",
          bin: "Drywaste02",
        },
        {
          ref: ref(database, "bins03"),
          statusKey: "STATUS04",
          bin: "Wetwaste02",
        },
        {
          ref: ref(database, "bins04"),
          statusKey: "STATUS05",
          bin: "Drywaste03",
        },
      ];

      binsRefs.forEach(({ ref, statusKey, bin }) => {
        onChildAdded(ref, (snap) => {
          const status = snap.child(statusKey).val();
          setBinsData((prevData) => ({
            ...prevData,
            [bin]: status,
          }));
        });
      });
    };

    const intervalId = setInterval(fetchBinsData, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function colorBG(status) {
    const percentage = parseInt(status);
    if (percentage >= 70) {
      return "red";
    } else if (percentage >= 50) {
      return "yellow";
    } else {
      return "green";
    }
  }

  return (
    <>
      <div className="home">
        <h2>Shivalik Smart Garbage Monitoring System</h2>
        <table>
          <thead>
            <tr>
              <th>Bins</th>
              <th>Status</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(binsData).map(([bin, status]) => {
              const color = colorBG(status);

              return (
                <tr key={bin}>
                  <td>{bin}</td>
                  <td
                    style={{
                      backgroundColor: `${colorBG(status)}`,
                    }}
                  >
                    {status}
                  </td>
                  <td>
                    <a
                      href={binAddresses.bins01}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on Map
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <About />
      <Footer />
    </>
  );
}
