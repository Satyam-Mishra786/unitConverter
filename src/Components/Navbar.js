import logo from '../Assests/logo.png'
function Navbar() {
    return (
        <nav>
            <div className="logoContainer">
                <img src={logo} alt="" className='logo' />
            </div>
            <div className='logo-name'>Unit Converter</div>
        </nav>
    )
}

export default Navbar