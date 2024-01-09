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
                        <div className="title">Pei - Group D - 19</div>
                        <img className="image" src="https://i.pinimg.com/564x/3b/75/b1/3b75b10a2959abedfaf7d9a007a9cef2.jpg" alt="" />
                        <h1 className="content-title">Short Biography:</h1>
                        <p className="content-paragraph">💗I love Jeno NCT DREAM💗</p>
                    </div>
                </div>

            </div>
        </Layout>
    );
}

export default Owner;