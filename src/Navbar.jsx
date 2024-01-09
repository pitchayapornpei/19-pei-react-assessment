import "./Navbar.css";

function Navbar() {

    return (
        <header className="top-header">
            <a className="menu-item" href={"/"}>Home</a>
            <a className="menu-item" href={"/owner"}>Owner</a>
        </header>
    );
}

export default Navbar;

