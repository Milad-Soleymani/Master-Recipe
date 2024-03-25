import pepperoni from '../assets/images/pepperoni.jpg'

import '../Styles/pepperoni.css'

const Pepproni = () => {

    return (
        <div>
            <div className='Header'>
                <div className="picture">
                    <img src={pepperoni} className='pepperoniImage' alt='pepperoni' />
                </div>
                <div className="details">
                    <h2> Pizza Pepperoni </h2>
                    <ul>
                        <li> Lorem ipsum dolor sit amet. </li>
                        <li> Lorem ipsum dolor sit amet. </li>
                        <li> Lorem ipsum dolor sit amet. </li>
                        <li> Lorem ipsum dolor sit amet. </li>
                        <li> Lorem ipsum dolor sit amet. </li>
                        <li> Lorem ipsum dolor sit amet. </li>
                        <li> Lorem ipsum dolor sit amet. </li>
                        <li> Lorem ipsum dolor sit amet. </li>
                        <li> Lorem ipsum dolor sit amet. </li>
                        <li> Lorem ipsum dolor sit amet. </li>
                        <li> Lorem ipsum dolor sit amet. </li>
                    </ul>
                </div>
            </div>
            <div className="Ingredients"> </div>
            <div className="How-to-cook"></div>
        </div>
    )
}

export default Pepproni;