import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../../src/Main.css"
import GoogleMapsReact from './GoogleMapsReact';


const ContactForm = () => {
   

   const form = useRef();
   
   const serviceID = 'service_93r2mn2'
   const templateID = 'template_x3kn7yo'
   const userId = 'wPUTZrKpq_7dPCfol'
   
   const sendEmail = (e) => {
      e.preventDefault();
     
         emailjs.sendForm(serviceID, templateID, form.current, userId)
           .then((result) => {
               console.log(result.text);
           }, (error) => {
               console.log(error.text);
           });
      
         form.current.reset()
   };

  return (
    <section className="contact-form__content">
      <div className="contact-form__container _container">
         <div className="row">
            <div className="col-md-6">
               <div className="contact-form__location location">
                  <div className="location__heading">
                     <h4>Xəritə</h4>
                  </div>
                  <div className="location__map">
                  <GoogleMapsReact/>
                  </div>
               </div>
            </div>
            <div className="col-md-6">
               <div className="contact-form__message message">
                  <div className="message__heading">
                     <h4>Əlaqə</h4>
                  </div>
                  <div className="message__body">
                     <form ref={form} onSubmit={sendEmail}>
                     <div className="row">
                        <div className="col-md-6">
                           <input name='name' type="text" placeholder='Ad,Soyad' />
                        </div>
                        <div className="col-md-6">
                           <input name='email' type="email" placeholder='E-mail Ünvan'/>
                        </div>
                        <div className="col-md-12">
                           <textarea name="message" id="" cols="30" rows="10" placeholder='Mesaj Yaz'></textarea>
                        </div>
                     </div>
                     <div className="message__btn">
                        <input type="submit" value='Mesaj Göndər' />
                     </div>
                     </form>
                     
                  </div>
               </div>
            </div>
         </div>
      </div>
    </section>
  )
}

export default ContactForm