import './contact.css';

import { Calendly, Email } from '../assets/logos';

const ContactPage = () => {
    return (
        <section id="contactme" class="contactpage">
        <div class="sectionHead">
          {/* Title */}
          <span class="opener">Feel free to</span>
          <h2 class="headliner">CONTACT ME</h2>
        </div>

        <div class="sectionBody">
          {/* Email  */}
          <img alt="" src={Email}/>
          <a rel="noopener" href="mailto:akinloyetioluwani@gmail.com" target="_blank"
            class="contactLink">akinloyetioluwani@gmail.com</a>
          <p>You could email me directly</p>

          <h1>OR</h1>

          {/* Calendly  */}
          <img alt="" src={Calendly}/>
          <a rel="noopener" href="https://calendly.com/akinloyetioluwani" target="_blank"
            class="contactLink">Calendly</a>
          <p>Schedule a virtual meeting with me </p>

          {/* Contact Form   */}
          <h2>Contact Form</h2>
          <form id="contactForm" action method>
            {/* Name Input */}
            <input type="text" id="nameInput" class="nameInput" required
              placeholder="Input Name*" />
            {/* Phone Input (make optional) */}
              <input type="tel"   id="phoneInput"   class="phoneInput" required placeholder="Input Number"/>
            {/* Email Input  */}
            <input type="email" id="emailInput" class="emailInput" required
              placeholder="Input Email*" />
            {/* Subject Input  */}
            <input type="text" id="subjectInput" class="subjectInput" required
              placeholder="Input Subject*" />
            {/* Message Input  */}
            <textarea rows="5" id="messageInput" class="messageInput" required
              placeholder="Input Message*"></textarea>
            {/* Submit Button  */}
            <button>Reach Out</button>
          </form>
          
        </div>

      </section>
    )
};

export default ContactPage;