import '../Styles/Home.css'


import pizzaPepperoni from '../assets/images/pizza-pepperoni.jpeg'
import burger from '../assets/images/burger.jpg'
import sushi from '../assets/images/sushi.jpg'

const Home = () => {
    return (
        <div>
            <h1 className='header'> Hi, Welcome to Master Recipe Website </h1>
            <p> You can view most popular food, recipes and cook.
                You view Most popular foods below under
            </p>
            <h2 className='MostPopularHeader'>
                Must Popular
            </h2>
            <div className='Cards'>

                <div className="Card1 Card">
                    <img src={pizzaPepperoni} alt='Pizza Pepperoni'/>
                    <h3> pizza pepperoni </h3>
                    <p> Pepperoni pizza is one of the best foods. 55% of people put this food in their favorite list </p>
                    <a href=""> Get Recipe </a>
                </div>

                <div className="Card2 Card">
                    <img src={burger} alt='burger'/>
                    <h3> burger </h3>
                    <p> Next to pizza, burger is one of the best foods in the world and many people like it  </p>
                    <a href=""> Get Recipe </a>
                </div>

                <div className="Card3 Card">
                    <img src={sushi} alt='Sushi'/>
                    <h3> Sushi </h3>
                    <p>Sushi is a Japanese dish made of vinegared rice that is usually accompanied by meat </p>
                    <a href=""> Get Recipe </a>
                </div>


            </div>
        </div>
    )
}

export default Home;