import React, { useEffect } from 'react';
import $ from 'jquery';

const ContactMe: React.FC = () => {
  useEffect(() => {
    // Input Lock Logic
    $('textarea').blur(function () {
      $('#hire textarea').each(function () {
        const $this = $(this);
        const element = this as HTMLInputElement;
        if (element.value !== '') {
          $this.addClass('focused');
          $('textarea + label + span').css({ opacity: 1 });
        } else {
          $this.removeClass('focused');
          $('textarea + label + span').css({ opacity: 0 });
        }
      });
    });

    $('#hire .field:first-child input').blur(function () {
      $('#hire .field:first-child input').each(function () {
        const $this = $(this);
        const element = this as HTMLInputElement;
        if (element.value !== '') {
          $this.addClass('focused');
          $('.field:first-child input + label + span').css({ opacity: 1 });
        } else {
          $this.removeClass('focused');
          $('.field:first-child input + label + span').css({ opacity: 0 });
        }
      });
    });

    $('#hire .field:nth-child(2) input').blur(function () {
      $('#hire .field:nth-child(2) input').each(function () {
        const $this = $(this);
        const element = this as HTMLInputElement; // Type assertion for TypeScript
        if (element.value !== '') {
          $this.addClass('focused');
          $('.field:nth-child(2) input + label + span').css({ opacity: 1 });
        } else {
          $this.removeClass('focused');
          $('.field:nth-child(2) input + label + span').css({ opacity: 0 });
        }
      });
    });
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div className="content-page">
      <section id="hire">
        <h1>Contact Me</h1>
        <form>
          {/* Name Field */}
          <div className="field name-box">
            <input
              type="text"
              id="name"
              placeholder="Who Are You?"
              aria-label="Name"
            />
            <label htmlFor="name">Name</label>
            <span className="ss-icon">check</span>
          </div>

          {/* Email Field */}
          <div className="field email-box">
            <input
              type="email"
              id="email"
              placeholder="name@email.com"
              aria-label="Email"
            />
            <label htmlFor="email">Email</label>
            <span className="ss-icon">check</span>
          </div>

          {/* Message Field */}
          <div className="field msg-box">
            <textarea
              id="msg"
              rows={4}
              placeholder="Your message goes here..."
              aria-label="Message"
            />
            <label htmlFor="msg">Msg</label>
            <span className="ss-icon">check</span>
          </div>

          {/* Submit Button */}
          <input className="button" type="submit" value="Send" />
        </form>
      </section>
    </div>
  );
};

export default ContactMe;
