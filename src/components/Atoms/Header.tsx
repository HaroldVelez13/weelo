import logo from "../../logo.png"

function Header() : JSX.Element{
    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">

                <a className="navbar-brand fs-1 " >
                    <img src={logo} alt="Weelo Logo" style={{width:"3rem"}}/>
                    eelo
                </a>
            </div>
        </nav>
    );
}

export default Header;
