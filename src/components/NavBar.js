import Logo from '../assets/images/MasterRecipe.png'
import '../Styles/NavBar.css'

const NavBar = () => {
    return (
        <div className="nav">
            <div className="right-div">
                <a href='/' className='HeaderNAvbar'><h1>
                    Master Recipe
                </h1></a>
            </div>
            <div className="left-div">
                <a href='/'><img src={Logo} className='NavImg' alt="Master Recipe" /></a>
            </div>
        </div>
    )
}

export default NavBar