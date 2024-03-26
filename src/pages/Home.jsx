import '../Styles/Home.css'


import pizzaPepperoni from '../assets/images/pizza-pepperoni.jpeg'
import burger from '../assets/images/burger.jpg'
import sushi from '../assets/images/sushi.jpg'
import cake from '../assets/images/cake.jpg'
import Baklava from '../assets/images/Baklava.jpg'
import desert from '../assets/images/desert.jpg'
import qrCode from '../assets/images/qrCode.png'

const Home = () => {
    return (
        <div>
            <h1 className='header'> Hi, Welcome to Master Recipe Website </h1>
            <p> You can view most popular food, recipes and cook.
                You view Most popular foods below under
            </p>
            <h2 className='MostPopularHeader'>
                Must Popular foods
            </h2>
            <div className='Cards'>

                <div className="Card1 Card">
                    <img src={pizzaPepperoni} alt='Pizza Pepperoni' />
                    <h3> pizza pepperoni </h3>
                    <p> Pepperoni pizza is one of the best foods. 55% of people put this food in their favorite list </p>
                    <a target='_blank' href="/recipe/pepperoni"> Get Recipe </a>
                </div>

                <div className="Card2 Card">
                    <img src={burger} alt='burger' />
                    <h3> burger </h3>
                    <p> Next to pizza, burger is one of the best foods in the world and many people like it  </p>
                    <a target='_blank' href="/recipe/burger"> Get Recipe </a>
                </div>

                <div className="Card3 Card">
                    <img src={sushi} alt='Sushi' />
                    <h3> Sushi </h3>
                    <p>Sushi is a Japanese dish made of vinegared rice that is usually accompanied by meat </p>
                    <a target='_blank' href="/recipe/sushi"> Get Recipe </a>
                </div>
            </div>

            {/* sweets Part */}

            <h2 className='MostPopularHeadersweets'>
                Must Popular sweets
            </h2>
            <div className='Cards'>

                <div className="Card1 Card">
                    <img src={cake} alt='cake' />
                    <h3> cake </h3>
                    <p> Cake is a flour confection made from flour, sugar, and other ingredients and is usually baked. In their oldest forms, cakes were modifications of bread, but cakes now cover a wide range of preparations that can be simple or elaborate </p>
                    <a href=""> Get Recipe </a>
                </div>

                <div className="Card2 Card">
                    <img src={Baklava} alt=' Baklava ' />
                    <h3> Baklava </h3>
                    <p> Baklava is a layered dessert made of filo pastry sheets, filled with chopped nuts, and sweetened with syrup or honey. </p>
                    <a href=""> Get Recipe </a>
                </div>

                <div className="Card3 Card">
                    <img src={desert} alt=' desert ' />
                    <h3> desert </h3>
                    <p> Dessert is a course that concludes a meal. The course consists of sweet foods, such as cake, biscuit, ice cream and possibly a beverage such as dessert wine and liqueur. </p>
                    <a href=""> Get Recipe </a>
                </div>
            </div>
            <div className='Donate'>
                <h3 className='DonateHeader'> Donate us! </h3>
                <p className='DonateAbout'> You can support us by scanning the qr code in below </p>
                <img src={qrCode} /> 
                <p> Address:  THSv14oHxBxiwNKQE5wt49ujgFsaX7asJV </p>
            </div>
        </div>
    )
}

export default Home;