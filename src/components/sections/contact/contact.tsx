import React from 'react';
import { EmailLink } from '../../shared/links';
import "./contact.scss"

const Contact = () => {

  return (
    <div className="contact-container"id="contact">
      <h3>Let's build something great, together<span className="orange">.</span></h3>
      <p>Drop me a line for opportunities, collaborations, inquiries, or just to have a chat.</p>
      <EmailLink prop="Say Hello"/>
    </div>
   );
}

export default Contact;
