import React from 'react';
import "./contact.scss"
const Contact = () => {

  const EmailLink = () => {
    return (
      <a href="mailto:elliottkan7@gmail.com" className="link">elliottkan7@gmail.com</a>
    )
  }

  return (
    <div className="contact-container"id="contact">
      <h3>Let's build something good, together<span className="orange">.</span></h3>
      <p>Drop me a line for opportunities, collaborations, inquiries, or just to have a chat.</p>
      <EmailLink/>
    </div>
   );
}

export default Contact;
