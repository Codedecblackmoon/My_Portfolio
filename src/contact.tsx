// import React, { useState } from 'react';
// import emailjs from '@emailjs/browser';
  

// function Contact() {
//     const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [massage, setMessage] = useState(''); 


//   const handleFormSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const serviceID = 'service_4b0mwhe'; 
//     const templateID = 'template_oxc16mb';  
//     const userID = 'm_XcbcDfp4HlS5nKC';

//     const templateParams = {
//       from_name: name,
//       from_email: email,
//       message: massage,
//       to_email: 'Gideon.L'
//     };

//      emailjs.send(serviceID, templateID, templateParams, userID)
//       .then((response) => {
//         alert('Message sent successfully!');
//         console.log('Email sent successfully:', response);
//         setName('');
//         setEmail('');
//         setMessage('');
//       })
//       .catch((error) => {
//         console.error('Failed to send message:', error);
//         alert('Failed to send the message. Please try again later.');
//       });
//   }


//   return (
//     <div className="min-h-screen text-white flex items-center justify-center p-10 border-t border-white/20">
//       <div className="w-full max-w-4xl grid grid-cols-2 gap-10 items-start">
//         {/* Left column: form card */}
//         <div className="border-1 border-white rounded-3xl p-5 flex flex-col gap-4">
//           <input
//             type="text"
//             placeholder="Full Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             className="w-full bg-transparent border border-white rounded-full px-4 py-2 text-sm placeholder-white/50 focus:outline-none focus:border-white"
//           />
//           <input
//             type="tel"
//             placeholder="Number"
//             className="w-full bg-transparent border border-white rounded-full px-4 py-2 text-sm placeholder-white/50 focus:outline-none focus:border-white"
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full bg-transparent border border-white rounded-full px-4 py-2 text-sm placeholder-white/50 focus:outline-none focus:border-white"
//           />
//           <textarea
//             placeholder="Massage"
//             id="massage"
//             rows={5}
//             value={massage}
//             onChange={(e) => setMessage(e.target.value)}
//             required
//             className="w-full bg-transparent border border-white rounded-2xl px-4 py-3 text-sm placeholder-white/50 resize-none focus:outline-none focus:border-white"
//           />
//         </div>

//         {/* Right column: heading */}
//         <div>
//           <h1
//             className="text-center leading-none"
//             style={{
//                 fontFamily: '"Archivo Black", sans-serif',
//                 fontOpticalSizing: 'auto',
//                 fontWeight: 200,
//                 fontStyle: 'normal',
//                 WebkitTextStroke: '0.5px white',
//                 color: 'transparent',
//                 fontSize: 'clamp(1.5rem, 5.5vw, 6.5rem)',
//                 margin: '0px',
//                 padding: '0',
//             }}
//           >
//             CONTACT
//             <br />
//             ME
//           </h1>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;


import React, { useState } from 'react';
import emailjs from '@emailjs/browser';


function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [massage, setMessage] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceID = 'service_4b0mwhe'; 
    const templateID = 'template_oxc16mb'; 
    const userID = 'm_XcbcDfp4HlS5nKC';

    const templateParams = {
      from_name: name,
      from_email: email,
      message: massage,
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
    <div className="min-h-screen text-white flex items-center justify-center p-6 sm:p-10 border-t border-white/20">
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center md:items-start">
        {/* Right column on desktop, but shown first on mobile: heading */}
        <div className="order-1 md:order-2">
          <h1
            className="text-center leading-none"
            style={{
                fontFamily: '"Archivo Black", sans-serif',
                fontOpticalSizing: 'auto',
                fontWeight: 200,
                fontStyle: 'normal',
                WebkitTextStroke: '0.5px white',
                color: 'transparent',
                fontSize: 'clamp(2.25rem, 5.5vw, 6.5rem)',
                margin: '0px',
                padding: '0',
            }}
          >
            CONTACT
            <br />
            ME
          </h1>
        </div>

        {/* Form card */}
        <form
          onSubmit={handleFormSubmit}
          className="order-2 md:order-1 w-full border border-white rounded-3xl p-4 sm:p-5 flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full bg-transparent border border-white rounded-full px-4 py-2 text-sm placeholder-white/50 focus:outline-none focus:border-white"
          />
          <input
            type="tel"
            placeholder="Number"
            className="w-full bg-transparent border border-white rounded-full px-4 py-2 text-sm placeholder-white/50 focus:outline-none focus:border-white"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full bg-transparent border border-white rounded-full px-4 py-2 text-sm placeholder-white/50 focus:outline-none focus:border-white"
          />
          <textarea
            placeholder="Message"
            id="massage"
            rows={5}
            value={massage}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full bg-transparent border border-white rounded-2xl px-4 py-3 text-sm placeholder-white/50 resize-none focus:outline-none focus:border-white"
          />
          <button
            type="submit"
            className="self-center sm:self-start mt-2 border border-white/60 rounded-full px-6 py-2 text-sm font-medium hover:bg-white hover:text-black transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;