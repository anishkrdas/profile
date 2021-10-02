import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import  {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import cv from "../misc/AnishKumaDas_CurriculumVitae.pdf";

const Contacts = () => {

    const {register, handleSubmit, errors} = useForm();
    const [successMessage, setSuccessMessage] = useState("");
    
    const emailServiceID = "AnishGMAILService";
    const emailTemplateID = "AnishGMAILTemplate";
    const emailUserID = "user_WRrs7pQ3twf0NkMYvPFkj";

    const onSubmit = (data, r) => {
        send(emailServiceID, emailTemplateID, 
            {name: data.name, phone: data.phone, email: data.email, subject: data.subject, description : data.description}, emailUserID)
                r.target.reset();
    }

    const send = (emailServiceID, emailTemplateID, vars, emailUserID) => {
    
        emailjs.send(emailServiceID, emailTemplateID, vars, emailUserID)
          .then(() => {
              setSuccessMessage("!!!  Thank you for your message! I've received the notification! I will contact you as soon as possible  !!!");
          }).catch(err => console.error(`!!!  Something went wrong ${err} !!!`));
      }


    return (
        <div id = "contact" className="contacts">
            <div className="text-center">
            <h1><b>touch</b>&nbsp;base</h1>
            <span className="success-message">{successMessage}</span>
            <span className="error-message">{errors.name && errors.name.message}</span>
            <span className="error-message">{errors.phone && errors.phone.message}</span>
            <span className="error-message">{errors.email && errors.email.message}</span>
            <span className="error-message">{errors.subject && errors.subject.message}</span>
            <span className="error-message">{errors.description && errors.description.message}</span>
            </div>
            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="col-md-6 col-xs-12">
                        <div className="text-center">
                        <input
                            id="name"
                            type="text"
                            className="form-control"
                            placeholder="Name *"
                            name="name" required
                            ref={
                                register({
                                    required : "!!!  Please enter your name  !!!"
                                })
                            }
                        />
                        <div className="line"></div>
                        </div>
                        
                        <div className="text-center">
                        <input
                            id="phone"
                            type="text"
                            className="form-control"
                            placeholder="Phone Number"
                            name="phone" 
                            ref={
                                register({
                                    pattern: {
                                      value: /^[0-9]{10}$/,
                                      message: "!!!  Please provide a valid phone number  !!!"
                                    }
                                })
                            }
                        />
                        <div className="line"></div></div>
                        
                        <div className="text-center">
                        <input
                            id="email"
                            type="email"
                            className="form-control"
                            placeholder="Email *"
                            name="email" required
                            ref={
                              register({
                                  required : "!!!  Please provide me with your email address  !!!",
                                  pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "!!!  Please provide a valid email id  !!!"
                                  }
                              })
                          }
                        />
                        <div className="line"></div></div>
                        
                        <div className="text-center">
                        <input
                            id="subject"
                            type="text"
                            className="form-control"
                            placeholder="Subject *"
                            name="subject" required
                            ref={
                              register({
                                  required : "!!!  Please add a subject  !!!"
                              })
                          }
                        />
                        <div className="line"></div>
                    </div>                    
                    
                        <a href={cv} download="AnishKumaDas_CurriculumVitae.pdf"><button className="cv-offer cv-btn" type="button">Download my Curriculum Vitae</button></a>
                        </div>
                    <div className="col-md-6 col-xs-12">
                        
                    <div className="text-center">
                        <textarea
                            id="description"
                            type="text"
                            className="form-control"
                            placeholder="Message ... *"
                            name="description" required
                            ref={
                              register({
                                  required : "!!!  Please brief me your requirement  !!!"
                              })
                          }
                        ></textarea>
                        <div className="line"></div></div>
                        
                        <button className="btn-main-offer contact-btn" type="submit">Drop me an email!</button>
                    </div>
                </div>
                </form>
            </div>
            <div className="footer">
                <p>&copy;2021 Anish Kumar Das. Design by <a href="mailto:anishkrdas@outlook.com"> &Lambda; &kappa; D <FontAwesomeIcon icon={faReply}/> </a> |  <a className = "call-up" href="tel:+917768862416"><FontAwesomeIcon icon={faPhoneVolume}/> +091-776-886-2416</a></p>
            </div>
        </div>
    )
}

export default Contacts

