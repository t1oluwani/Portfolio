import '../styling/contact.css';
import emailjs from 'emailjs-com';
import { useRef, useState, useEffect } from 'react';

import { Calendly, Email } from '../../assets/logos';

const ContactPage = () => {
  const form = useRef();
  const sectionRef = useRef();
  const [hasBeenSeen, setHasBeenSeen] = useState(false);
  const slideFLAnimation = hasBeenSeen ? 'slideFLAnimation' : '';
  const slideFRAnimation = hasBeenSeen ? 'slideFRAnimation' : '';

  console.log("ContactPage HasBeenSeen: ", hasBeenSeen);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasBeenSeen) {
          setHasBeenSeen(true);
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_28d7l5p', 'template_jmkrpqa', form.current, 'YsiHejfW6E68ylFCL')
      .then((result) => {
          console.log(result.text);
          console.log(form.current);
          alert('Message Sent Successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message. Please try again later.');
      });
    
    e.target.reset();
  };

  return (
    <section id="contactme" className="contactpage" ref={sectionRef} >
      <div className="sectionHead">
        <span className="opener">Feel free to</span>
        <h2 className="headliner">CONTACT ME</h2>
      </div>

      <div className="sectionBody">

        <div className='contactOptions'>

          <a rel="noreferrer" href="mailto:akinloyetioluwani@gmail.com" target="_blank" className="contactLink">
            <div className={`emailOption ${slideFRAnimation}`}>
              <h3>You can email me directly:</h3>
              <label className="contactLabel">
                <img alt="Email Logo" src={Email} />
                akinloyetioluwani@gmail.com
              </label>
            </div>
          </a>

          <h1 className='hiddenOR'>OR</h1>

          <a rel="noreferrer" href="https://calendly.com/akinloyetioluwani" target="_blank" className="contactLink">
            <div className={`calendlyOption ${slideFRAnimation}`}>
              <h3>Schedule a virtual meeting with me:</h3>
              <label className="contactLabel">
                <img alt="Calendly Logo" src={Calendly} />
                Schedule via Calendly
              </label>
            </div>
          </a>

        </div>

        <h1>OR</h1>

        <div className={`contactForm ${slideFLAnimation}`}>
          <h2>Fill this Contact Form</h2>
          <form id="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text"  id="nameInput"    name="name"    className="nameInput"    required placeholder="Input Name*" />
            <input type="tel"   id="phoneInput"   name="phone"   className="phoneInput"   required placeholder="Input Number*" />
            <input type="email" id="emailInput"   name="email"   className="emailInput"   required placeholder="Input Email*" />
            <input type="text"  id="subjectInput" name="subject" className="subjectInput" required placeholder="Input Subject*" />
            <textarea rows="7"  id="messageInput" name="message" className="messageInput" required placeholder="Input Message*"></textarea>
            <button type='submit'>Reach Out</button>
          </form>
        </div>

      </div>

    </section>
  )
};

export default ContactPage;