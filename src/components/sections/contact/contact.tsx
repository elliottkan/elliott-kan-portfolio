import React from 'react';
import { useInView } from 'react-intersection-observer';
import { EmailLink } from '../../shared/links';
import "./contact.scss"

const Contact = () => {

  const options = {
    threshold: 0.3,
    triggerOnce: true,
  }

  const { ref, inView } = useInView(options);

  return (
    <div ref={ref} className={`${'contact-container fade-in-up'} ${inView && 'appear'}`} id="contact">
      <h3>Let's build something great, together<span className="orange">.</span></h3>
      <p>Drop me a line for opportunities, collaborations, inquiries, or just to have a chat.</p>
      <EmailLink prop="Say Hello"/>
    </div>
   );
}

export default Contact;
