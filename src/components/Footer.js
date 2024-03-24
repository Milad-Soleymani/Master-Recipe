import '../Styles/Footer.css'


import { Github } from 'react-bootstrap-icons'
import { Instagram } from 'react-bootstrap-icons'
import { Linkedin } from 'react-bootstrap-icons'
import { Telegram } from 'react-bootstrap-icons'

const Footer = () => {

    return (
        <div className="footer">
            <div className='left-part'>
                <h4> All right reserved  </h4>
                <h4>  copyright {new Date().getFullYear()} &#169;</h4>
            </div>
            <div className='right-part'>
                <h3> Developer Social Media's : </h3>
                <div className='Social-Media'>
                    <div>
                        <a target='_blank' href='https://Github.com/MiladCoderSoli'>
                            <Github width='50px' height='50px' />
                            <br /> GitHub </a>
                        </div>
                        <div>
                            <a target='_blank' href='https://instagram.com/web.coder2'> 
                            <Instagram width='50px' height='50px' />
                            <br /> Instagram </a>
                        </div>

                        <div>
                            <a target='_blank' href='https://www.linkedin.com/in/miladcoder/'> 
                            <Linkedin width='50px' height='50px' />
                            <br /> Linkedin </a>
                        </div>


                        <div>
                            <a target='_blank' href='https://t.me/miladcoderishere'> 
                            <Telegram width='50px' height='50px' />
                            <br /> Telegram </a>
                        </div>
                        
                    </div>
                </div>
            </div>
            )
}

            export default Footer;