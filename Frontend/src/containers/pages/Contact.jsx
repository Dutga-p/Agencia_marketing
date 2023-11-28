import Footer from "../../components/navigation/Footer"
import Navbar from "../../components/navigation/Navbar"
import Layout from "../../hocs/layouts/Layout"
import 'containers/styles/EstiloContacto.css';
import { FaWhatsapp } from 'react-icons/fa';

import { useRef } from 'react';
import emailjs from '@emailjs/browser';
function Contact(){
    const refForm = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
        .sendForm('service_8x6myfu', 'template_ddmjtbs', refForm.current, 'NmYrJCkJn_51Qff7n')
          .then(
            () => {
                alert('Email sent')
                window.location.reload(false)
            },
            () => {
                alert('Error sending email, try again')
            }
          )   
    }
    return(
        <Layout>
            <Navbar/>
                <h2 className="mt-40 text-4xl text-black text-center">Contáctanos</h2>
                <div className='contact-form'>
                  <form ref={refForm} onSubmit={sendEmail}>
                      <ul>
                          <li className=''>
                              <input type="text" placeholder='Name' name="from_name" required  />
                          </li>
                          <li className='mr-15'>
                              <input type="email" name="from_email" placeholder='Email' required />
                          </li>
                          <li >
                              <input placeholder='Subject' type='text' name='Subject' required />
                          </li>
                          <li >
                              <textarea placeholder='Message' name='Message' required ></textarea>
                          </li>
                          <li>
                              <input type='submit' className='flat-button' value="SEND"/>
                          </li>
                      </ul>
                  </form>
                </div>
                <a className="whatsapp-button" href="https://wa.me/573183150525?text=¡Hola! Quisiera obtener más información." target="_blank" rel="noopener noreferrer">
                    <button>
                        Chatea con nosotros <FaWhatsapp className="whatsapp-icon" />
                    </button>
                </a>
            <Footer/>
        </Layout>
    )
}
export default Contact