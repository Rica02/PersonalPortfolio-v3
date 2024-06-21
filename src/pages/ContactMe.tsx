import React, { useState, useRef } from 'react';
import '../sass/pages/contact-me.scss';
import emailjs from '@emailjs/browser';
import { useNav } from '../hooks/useNav';
import { ContactFormError, ContactFormValues } from '../interfaces';
import linkedinImg from '../assets/images/linkedin-logo.png';

const ContactMe = () => {
  const contactMeRef = useNav('contactme');
  const [formValues, setFormValues] = useState<ContactFormValues>({
    user_name: '',
    user_email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState<ContactFormError>({
    user_name: false,
    user_email: false,
    message: false,
  });
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState(false);
  const [emailIsSending, setIsEmailSending] = useState(false);
  const form = useRef<any>();

  const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID ?? '';
  const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID ?? '';
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY ?? '';

  const sendEmail = (e: any) => {
    e.preventDefault();

    setEmailSent(false);
    setError(false);
    setIsEmailSending(false);

    const isNameInvalid = formValues.user_name === '';
    const isEmailInvalid =
      formValues.user_email === '' || !isValidEmail(formValues.user_email);
    const isMessageInvalid = formValues.message === '';

    // Validate form
    if (isNameInvalid || isEmailInvalid || isMessageInvalid) {
      setFormErrors({
        user_name: isNameInvalid,
        user_email: isEmailInvalid,
        message: isMessageInvalid,
      });
      return;
    }

    setIsEmailSending(true);

    // Send email
    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('Email successfully sent');
          // Clear form and show confirmation message
          (form.current as HTMLFormElement).reset();
          setEmailSent(true);
          setFormErrors({
            user_name: false,
            user_email: false,
            message: false,
          });
          setIsEmailSending(false);
        },
        (error) => {
          console.log('Error sending email: ', error);
          setError(true);
          setFormErrors({
            user_name: false,
            user_email: false,
            message: false,
          });
          setIsEmailSending(false);
        }
      );
  };

  // Email validationregex
  const isValidEmail = (email: string) => {
    return email.match(/^\S+@\S+\.\S+$/);
  };

  const handleInputChange = (e: any) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const LinkedInButton = () => {
    return (
      <img
        src={linkedinImg}
        alt="LinkedIn"
        onClick={() =>
          window.open('https://www.linkedin.com/in/ricamaeaverion/', '_blank')
        }
      />
    );
  };

  return (
    <section id="contactme" ref={contactMeRef}>
      <header className="contact-header">
        <h1>Contact me</h1>
      </header>
      <div className="contact-container">
        <div className="form-container">
          <p>
            Want to connect with me?
            <br />
            <br />
            Feel free to contact me with the form below{' '}
          </p>
          <p className="linkedin-text">
            or connect with me on <LinkedInButton />
          </p>

          {/* Contact me form */}
          <form ref={form} onSubmit={sendEmail}>
            <input
              className={`${formErrors.user_name ? 'error' : ''}`}
              type="text"
              name="user_name"
              placeholder="Name"
              onChange={handleInputChange}
            />
            <input
              className={`${formErrors.user_email ? 'error' : ''}`}
              type="email"
              name="user_email"
              placeholder="Email"
              onChange={handleInputChange}
            />
            <textarea
              className={`${formErrors.message ? 'error' : ''}`}
              name="message"
              placeholder="Your message"
              onChange={handleInputChange}
            />
            <input
              type="submit"
              value={`${emailIsSending ? 'SENDING . . .' : 'SEND MESSAGE'}`}
              disabled={emailIsSending}
            />
            <div className={`success-text ${emailSent ? 'visible' : ''}`}>
              <p>
                Your message was successfully sent, thank you!
                <br />I will get back to you as soon as possible.
              </p>
            </div>
            <div className={`error-text ${error ? 'visible' : ''}`}>
              <p>
                Hmm something went wrong with form. How about you shoot me a
                message on{' '}
                <a
                  href="https://www.linkedin.com/in/ricamaeaverion/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>{' '}
                for now? Sorry about that!
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
