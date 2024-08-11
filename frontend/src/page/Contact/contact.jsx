import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons';
import ContactPage from './contact.module.css';
import ContactForm from '../../component/ContactForm';

const Contact = () => {
  return (<>
    <div className={ContactPage.container}>
      <div className={ContactPage.help}>
        We're here to help
      </div>

      <div className={ContactPage.contactInfo}>
        <div className={ContactPage.infoStyle}>
          <div className={ContactPage.insideInfoStyle}>
            <div className={ContactPage.lineInfoStyle}>
              <div className={ContactPage.infoHeader}>
                <div className={`${ContactPage.iconPadding} ${ContactPage.iconLocation}`}>
                  <FontAwesomeIcon icon={faLocationDot} style={{ color: "#990033" }} className={`${ContactPage.icon} ${ContactPage.iconLocation}`} />
                </div>
                <h3>Working Country</h3>
              </div>
              <div className={ContactPage.textPadding}>
                India, USA, Canada, Europe, the Middle East and Russia
              </div>
            </div>
          </div>
        </div>
        <div className={ContactPage.infoStyle}>
          <div className={ContactPage.insideInfoStyle}>
            <div className={ContactPage.infoHeader}>
              <div className={`${ContactPage.iconPadding} ${ContactPage.iconClock}`}>
                <FontAwesomeIcon icon={faClock} flip="horizontal" style={{ color: "#0abf53" }} className={ContactPage.icon} />
              </div>
              <h3>Opening Hours</h3>
            </div>
            <div className={ContactPage.textPadding}>
              Monday - Friday: 9am - 6pm<br />Saturday: 10am - 4pm
            </div>
          </div>
        </div>
        <div className={ContactPage.infoStyle}>
          <div className={ContactPage.insideInfoStyle}>
            <div className={ContactPage.infoHeader}>
              <div className={`${ContactPage.iconPadding} ${ContactPage.iconEnvelope}`}>
                <FontAwesomeIcon icon={faEnvelopeOpenText} style={{ color: "#6168ff" }} className={ContactPage.icon} />
              </div>
              <h3>Contact Info</h3>
            </div>
            <div className={ContactPage.textPadding}>
              info@virgomediatech.com
            </div>
          </div>
        </div>
      </div>

      <div className={ContactPage.FormText}>
        <div className={ContactPage.FormTextText}>
          Leave a message and we will get back to you.
        </div>
        <div className={ContactPage.FormContainer}>
          <ContactForm />
        </div>
      </div>
    </div>
    <hr className={ContactPage.horizontal} />
  </ >
  )
}

export default Contact;
