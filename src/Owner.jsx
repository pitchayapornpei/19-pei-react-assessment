import "./Owner.css";
import Layout from './Layout';
import { useState } from 'react';

function Owner() {
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
        //console.log("role:", role);
    };

    return (
        <Layout>
            <div className="flexbox">
                <div className="item">
                    <div className="content">
                        <div className="title">James - Group X - 61</div>
                        <img className="image" src="../src/tree.jpeg" alt="" />
                        <h1 className="content-title">Short Biography:</h1>
                        <p className="content-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor
                            incididunt ut labore
                            et
                            dolore magna
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo
                            consequat. Duis
                            aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa quit officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>

            </div>
        </Layout>
    );
}

export default Owner;