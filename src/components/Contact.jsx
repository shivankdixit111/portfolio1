import React, { useEffect, useState } from 'react'
import contactImg from '../assets/images/contact-img.svg'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';

const Contact = () => {
  const [user, setUser] = useState({
     firstName: "",
     lastName: "",
     email: "",
     phoneNo: "",
     message: ""
  });
  
  const handleInput = (e)=>{
      const name = e.target.name;
      const value = e.target.value; 
      setUser({...user, [name]:value});
  }
    


  const handleSubmit = (e)=>{
    console.log(user)
     e.preventDefault();  
     const serviceId = "service_gy38y1p";
     const templateId = "template_m2pjnkx";
     const publicKey = "5pfi3N6oYTh8Kx_Oa";

     const templateParams = {
        from_name: user.firstName + " " +  user.lastName,
        from_email: user.email,
        from_phoneNo: user.phoneNo,
        to_name: 'Shivank Dixit',
        message: user.message
     }
 
     emailjs.send(serviceId, templateId, templateParams, publicKey)
     .then((response)=> {
             toast.success('Email sent successfully!', {
                 position: "top-right",
                 autoClose: 3000,
                 hideProgressBar: false,
                 closeOnClick: false,
                 pauseOnHover: true,
                 draggable: true,
                 progress: undefined,
                 theme: "dark", 
             }), 
             setUser({
                firstName: "",
                lastName: "",
                email: "",
                phoneNo: "",
                message: "",
             }) 
        }
     )
     .catch((error)=> 
         toast.error('Try again! Email could not sent', {
             position: "top-right",
             autoClose: 5000,
             hideProgressBar: false,
             closeOnClick: false,
             pauseOnHover: true,
             draggable: true,
             progress: undefined,
             theme: "dark", 
         })
     );
  }


  return (
     <>
       <section className='contact-container' id="contact">
            <h1 className='main-heading'> Get in Touch</h1>
            <form onSubmit={handleSubmit}>
                <div className="contact1"> 
                    {/* (i)  image  */}
                    <div className='contact-img'>
                        <img src={contactImg} alt="" />
                    </div>
                    <div className='contact-content'>
                        <div className='in'> 
                            <input 
                                type="text" placeholder='First Name'
                                name='firstName'
                                value = {user.firstName}
                                onChange={handleInput}
                            />
                            <input 
                                  type="text" placeholder='Last Name' name='lastName'
                                  value = {user.lastName}
                                  onChange={handleInput}
                            />
                        </div>
                        <div className='in'> 
                            <input 
                                type="text" placeholder='Enter your email' name='email'
                                value = {user.email}
                                onChange={handleInput}
                            />
                            <input 
                                type="text" placeholder='Enter your phoneNo' name='phoneNo'
                                value = {user.phoneNo}
                                onChange={handleInput}
                            />
                        </div> 
                        <textarea 
                            className="footer-message" name="message" id="" placeholder='Message'  
                            value = {user.message} 
                            onChange={handleInput}

                        />
                            <button type='submit' className='submit-btn'>Send</button> 
                    </div>
                </div>
            </form>
       </section>
     </>
  )
}

export default Contact