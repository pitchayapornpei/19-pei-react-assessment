import "./Admin.css";
import { useState } from "react";

function Admin({ employees }) {


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

            {/* <div className="item item-4">
                <form>
                    <label for="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={name}
                    // onChange={handleNameChange}
                    />

                    <label for="lastname">Last Name</label>
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        placeholder="Last Name"
                        value={lastname}
                    // onChange={handleLastnameChange}
                    />

                    <label for="position">Position</label>
                    <input
                        type="text"
                        id="position"
                        name="position"
                        placeholder="Position"
                        value={position}
                    // onChange={handlePositionChange}
                    />

                    <button
                        type="submit"
                    // onClick={handleSubmit}
                    >Save</button>
                </form>
            </div> */}

            <div className="item item-4">
                <form className="create-user">
                    <h1>Form Create User Here</h1>
                    <label for="username">Name</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Name"
                        value={username}
                        onChange={handleUsernameChange}
                    />

                    <label for="username">Last Name</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Last Name"
                        value={username}
                        onChange={handleUsernameChange}
                    />

                    <label for="username">Position</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        placeholder="Position"
                        value={username}
                        onChange={handleUsernameChange}
                    />

                    <button
                        className="button-save"
                        type="submit"
                        onClick={handleSubmit}
                    >Save</button>
                </form>
            </div>

            <div className="item item-4">
                <h1>Table Admin</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Position</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee) => {
                            return (
                                <tr>
                                    <td>{employee.name}</td>
                                    <td>{employee.lastname}</td>
                                    <td>{employee.position}</td>
                                    <td>
                                        <button
                                            className="button-delete"
                                            type="submit"
                                        // onClick={handleSubmit}
                                        >Delete</button>
                                    </td>

                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>

    );
}


export default Admin;








