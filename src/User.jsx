import React from "react";
import { useState } from 'react';
import "./User.css";


function User({ employees }) {

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
                                <tr key={user.id}>
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
