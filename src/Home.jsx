import React, { useEffect } from "react";
import { useState } from 'react';
import "./Home.css";
import Layout from './Layout';
import User from './User.jsx';
import Admin from './Admin.jsx';
import axios from "axios";

// import { mockEmployees } from './mockdata.jsx';

function Home() {
  const [sector, setSector] = useState("");
  const [employees, setEmployees] = useState([]);
  const [reload, setReload] = useState(false);

  const handleUser = () => {
    setSector("user")
    // console.log(sector);
  };

  const handleAdmin = () => {
    setSector("admin")
    // console.log(sector);
  };

  // const getData = () => {
  //   setEmployees(mockEmployees)

  // }
  // console.log(employees);

  // useEffect(getData, [])

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://jsd5-mock-backend.onrender.com/members"
      );
      setEmployees(response.data);
    };

    getData();
  }, [reload]);

  const createData = async (name, lastname, position) => {
    const requestData = {
      name: name,
      lastname: lastname,
      position: position,
    };
    const response = await axios.post(
      "https://jsd5-mock-backend.onrender.com/members",
      requestData
    );
    if (response.status === 200) {
      setReload(!reload);
    }
  };

  const removeData = async (id) => {
    const member_id = id;
    const response = await axios.delete(
      `https://jsd5-mock-backend.onrender.com/member/${member_id}`
    );
    if (response.status === 200) {
      setReload(!reload);
    };
  };


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
      {sector === "admin" ? <Admin employees={employees} createData={createData} removeData={removeData} /> : null}
    </Layout>
  );
}

export default Home;
