import logo from "../../logo.png"

function Header() : JSX.Element{
    return (
        <nav className="navbar navbar-dark bg-primary">
            <div className="container-fluid">

                <div className="navbar-brand fs-1 " >
                    <img src={logo} alt="Weelo Logo" style={{width:"3rem"}}/>
                    eelo
                </div>
            </div>
        </nav>
    );
}

export default Header;
