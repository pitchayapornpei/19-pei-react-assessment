import React, { useEffect } from "react";
import { useState } from 'react';
import "./Home.css";
import Layout from './Layout';
import User from './User.jsx';
import Admin from './Admin.jsx';

import { mockEmployees } from './mockdata.jsx';

function Home() {
  const [sector, setSector] = useState("");
  const [employees, setEmployees] = useState([]);

  const handleUser = () => {
    setSector("user")
    // console.log(sector);
  };

  const handleAdmin = () => {
    setSector("admin")
    // console.log(sector);
  };

  const getData = () => {
    setEmployees(mockEmployees)

  }
  // console.log(employees);

  useEffect(getData, [])


  return (
    <Layout>
      <div className="flexbox">
        <div className="item">
          <div className="content">
            <div className="title">Generation Thailand React - Assessment</div>
          </div>
        </div>

        <div className="item item-4">
          <div className="content">

            <button
              className="button-user"
              type="submit"
              onClick={handleUser}
            >User Home Sector</button>

            <button
              className="button-admin"
              type="submit"
              onClick={handleAdmin}
            >Admin Home Sector</button>
          </div>
        </div>
      </div>

      {sector === "user" ? <User employees={employees} /> : null}
      {sector === "admin" ? <Admin employees={employees} /> : null}
    </Layout>
  );
}

export default Home;
