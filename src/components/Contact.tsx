import React, { useState } from 'react';
  import emailjs from 'emailjs-com';
  
  const ContactMe = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); 


  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceID = 'service_4b0mwhe'; 
    const templateID = 'template_oxc16mb';  
    const userID = 'm_XcbcDfp4HlS5nKC';

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_email: 'Gideon.L'
    };

    

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        alert('Message sent successfully!');
        console.log('Email sent successfully:', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Failed to send message:', error);
        alert('Failed to send the message. Please try again later.');
      });
  }
  
  return (
    <div className="content-page">
      <section id="hire">
        <h1>Contact Me</h1>
        <form onSubmit={handleFormSubmit} className="contact-form">
          <div className="field name-box">
            <input
              type="text"
              id="name"
              placeholder="Who Are You?"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label htmlFor="name">Name</label>
          </div>

      
          <div className="field email-box">
            <input
              type="email"
              id="email"
              placeholder="name@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor="email">Email</label>
          </div>

          <div className="field msg-box">
            <textarea
              id="message"
              rows={4}
              placeholder="Your message goes here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <label htmlFor="message">Message</label>
          </div>

          <button className="button" type="submit">
            Send
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactMe;
