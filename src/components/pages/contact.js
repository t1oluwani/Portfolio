import '../styling/contact.css';

import { Calendly, Email } from '../../assets/logos';

const ContactPage = () => {
  return (
    <section id="contactme" className="contactpage">
      <div className="sectionHead">
        <span className="opener">Feel free to</span>
        <h2 className="headliner">CONTACT ME</h2>
      </div>

      <div className="sectionBody">

        <div className='contactOptions'>

          <a rel="noreferrer" href="mailto:akinloyetioluwani@gmail.com" target="_blank" className="contactLink">
            <div className='emailOption'>
              <h3>You can email me directly:</h3>
              <label className="contactLabel">
                <img alt="Email Logo" src={Email} />
                akinloyetioluwani@gmail.com
              </label>
            </div>
          </a>

          <h1 className='hiddenOR'>OR</h1>

          <a rel="noreferrer" href="https://calendly.com/akinloyetioluwani" target="_blank" className="contactLink">
            <div className='calendlyOption'>
              <h3>Schedule a virtual meeting with me:</h3>
              <label className="contactLabel">
                <img alt="Calendly Logo" src={Calendly} />
                Schedule via Calendly
              </label>
            </div>
          </a>


        </div>

        <h1>OR</h1>

        <div className='contactForm'>
          <h2>Fill this Contact Form</h2>
          <form id="contactForm" action="#" method="post">
            <input type="text" id="nameInput" className="nameInput" required placeholder="Input Name*" />
            <input type="tel" id="phoneInput" className="phoneInput" required placeholder="Input Number*" />
            <input type="email" id="emailInput" className="emailInput" required placeholder="Input Email*" />
            <input type="text" id="subjectInput" className="subjectInput" required placeholder="Input Subject*" />
            <textarea rows="7" id="messageInput" className="messageInput" required placeholder="Input Message*"></textarea>
            <button type='submit'>Reach Out</button>
          </form>
        </div>

      </div>

    </section>
  )
};

export default ContactPage;