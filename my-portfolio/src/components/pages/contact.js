import '../styling/contact.css';

import { Calendly, Email } from '../../assets/logos';

const ContactPage = () => {
  return (
    <section id="contactme" class="contactpage">
      <div class="sectionHead">
        {/* Title */}
        <span class="opener">Feel free to</span>
        <h2 class="headliner">CONTACT ME</h2>
      </div>

      <div class="sectionBody">

        <div className='contactOptions'>
          <div className='emailOption'>
            <p>You can email me directly:</p>
            <a rel="noopener" href="mailto:akinloyetioluwani@gmail.com" target="_blank" class="contactLink">
              <label class="contactLabel">
                <img alt="Email Logo" src={Email} />
                akinloyetioluwani@gmail.com
              </label>
            </a>
          </div>

          <h1>OR</h1>

          <div className='calendlyOption'>
            <p>Schedule a virtual meeting with me:</p>
            <a rel="noopener" href="https://calendly.com/akinloyetioluwani" target="_blank" class="contactLink">
              <label class="contactLabel">
                <img alt="Calendly Logo" src={Calendly} />
                Schedule via Calendly
              </label>
            </a>
          </div>
        </div>

        <div className='contactForm'>
          <h2>Contact Form</h2>
          <form id="contactForm" action method>
            <input type="text" id="nameInput" class="nameInput" required placeholder="Input Name*" />
            <input type="tel" id="phoneInput" class="phoneInput" required placeholder="Input Number*" />
            <input type="email" id="emailInput" class="emailInput" required placeholder="Input Email*" />
            <input type="text" id="subjectInput" class="subjectInput" required placeholder="Input Subject*" />
            <textarea rows="7" id="messageInput" class="messageInput" required placeholder="Input Message*"></textarea>
            <button type='submit'>Reach Out</button>
          </form>
        </div>

      </div>

    </section>
  )
};

export default ContactPage;