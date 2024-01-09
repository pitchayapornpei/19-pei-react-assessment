import React from "react";
import { useState } from 'react';
import "./User.css";


function User({ employees }) {
    const [role, setRole] = useState("admin");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [fullname, setFullname] = useState("");
    const [organization, setOrganization] = useState("");

    //const [role,setRole] = useState("users")
    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        // console.log('Username:', username);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        // console.log('Password:', password);
    };

    const handleFullnameChange = (event) => {
        setFullname(event.target.value);
        // console.log('fullname:', fullname);
    };

    const handleOrganizationChange = (event) => {
        setOrganization(event.target.value);
        // console.log('Organization:', Organization);
    };

    const handleSubmit = () => {

        console.log("Username:", username);
        console.log("Password:", password);
        console.log("Fullname:", fullname);
        console.log("Organization:", organization);

    };

    return (
        <div id="app">

            {/* {role === 'user' && <User />} */}
            {/* {role === 'admin' && <Admin />} */}



            <div className="item item-4">
                <h1>Table User</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Position</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((user) => {
                            return (
                                <tr>
                                    <td>{user.name}</td>
                                    <td>{user.lastname}</td>
                                    <td>{user.position}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div >
    );
}

export default User;
