import "./Admin.css";
import { useState } from "react";

function Admin({ employees, createData, removeData }) {


    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [position, setPosition] = useState("");



    const handleNameChange = (event) => {
        setName(event.target.value);

    };

    const handleLastnameChange = (event) => {
        setLastname(event.target.value);

    };

    const handlePositionChange = (event) => {
        setPosition(event.target.value);

    };

    const handleSave = (event) => {
        event.preventDefault();
        createData(name, lastname, position);
        setName("");
        setLastname("");
        setPosition("");
    };

    // const handleRemove = () => {
    //     removeData(employee.id)
    // };


    return (
        <div id="app">


            <div className="item item-4">
                <form className="create-user">
                    <h1>Form Create User Here</h1>
                    <label for="username">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={handleNameChange}
                    />

                    <label for="username">Last Name</label>
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        placeholder="Last Name"
                        value={lastname}
                        onChange={handleLastnameChange}
                    />

                    <label for="username">Position</label>
                    <input
                        type="text"
                        id="position"
                        name="position"
                        placeholder="Position"
                        value={position}
                        onChange={handlePositionChange}
                    />

                    <button
                        className="button-save"
                        type="submit"
                        onClick={handleSave}
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
                                <tr key={employee.id}>
                                    <td>{employee.name}</td>
                                    <td>{employee.lastname}</td>
                                    <td>{employee.position}</td>
                                    <td>
                                        <button
                                            className="button-delete"
                                            type="submit"
                                            onClick={() => removeData(employee.id)}
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








