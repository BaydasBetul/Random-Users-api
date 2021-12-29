import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import axios from "axios";
import emailSvg from "./assets/mail.svg";
import phoneSvg from "./assets/phone.svg";
import mapSvg from "./assets/map.svg";

function App() {
  const [user, setUser] = useState([]);
  const { email, title, first, last, phone, city, country, age, large } = user;
  const dataUrl = "https://randomuser.me/api/";

  const userGet = async () => {
    const response = await axios.get(dataUrl);
    const userInfo = await response.data.results[0];
    const {
      name: { title, first, last },
      email,
      phone,
      dob: { age },
      picture: { large },
      location: { city, country },
    } = userInfo;
    setUser({
      email,
      title,
      first,
      last,
      phone,
      city,
      country,
      age,
      large,
    });
  };
  useEffect(() => {
    userGet();
  }, []);
  //console.log(user);
  return (
    <div className="App">
      <Header />
      <div className="card-container">
        <div className="usercard">
          <div className="userinfo">
            <img src={large} alt={first} />
            <h2>
              {title} {first} {last}
            </h2>
            <h5>Age:{age}</h5>
          </div>
          <div className="email">
            <img src={emailSvg} alt={last} />
            <h4>{email}</h4>
          </div>
          <div className="phone">
            <img src={phoneSvg} alt={last} />
            <h4>{phone}</h4>
          </div>
          <div className="country">
            <img src={mapSvg} alt={last} />
            <h4>
              {city} / {country}
            </h4>
          </div>
          <button className="btn" onClick={() => userGet(!user)}>
            Random User Find
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
