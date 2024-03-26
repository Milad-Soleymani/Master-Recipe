import '../Styles/404.css'

import { TbError404 } from 'react-icons/tb'

const NotFound = () => {

    return(
        <div className='NFound'>
            <TbError404 fontSize='350px' />
            <h3 > 404 Not Found </h3>
            <a target='_self' href='/'> Back to Home </a>
        </div>
    )
}

export default NotFound;