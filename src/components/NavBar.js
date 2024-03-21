import Logo from '../assets/images/MasterRecipe.png'
import '../Styles/NavBar.css'

const NavBar = () => {
    return (
        <div className="nav">
            <div className="right-div">
                <h1>
                    Master Recipe
                </h1>
            </div>
            <div className="left-div">
                <img src={Logo} className='NavImg' alt="Master Recipe" />
            </div>
        </div>
    )
}

export default NavBar