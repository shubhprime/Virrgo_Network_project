import React from 'react';
import productStyles from './product3.module.css';

const Product3 = () => {
  const pic1 = 'https://business.humber.ca/assets/images/programs/certificates/hospitality-tourism-banner1920x512.jpg';
  const pic2 = 'https://img.freepik.com/premium-photo/photo-portrait-receptionist-desk-modern-hotel_742418-15674.jpg';

  return (
    <div>
      <div className={productStyles.bannerContainer}>
        <img src={pic1} className={productStyles.bannerImg} alt="Hotel Management System" />
      </div>

      <hr className={productStyles.horizontal} />

      <div className={productStyles.topic}>
        <div className={productStyles.topicHeading}>
          FULLY CUSTOMIZE – Hotel Management System with Restaurant Management and Human Resource Management Portal
        </div>
        <div className={productStyles.topicPara}>
          <div>
            Our comprehensive Hotel Management System is designed to meet the diverse needs of modern hotels, providing a fully customizable platform that integrates key hotel operations with restaurant management and human resource management capabilities. This all-in-one solution streamlines operations, enhances guest experiences, and optimizes staff management.
          </div>
          <div>
            With a wide array of modules and features, our system allows you to efficiently manage your hotel's website, bookings, customer relations, billing, inventory, and much more. Whether you are running a small boutique hotel or a large chain, our system scales to your needs, offering a seamless experience across all your operations.
          </div>
        </div>

        <div className={` ${productStyles.stats} ${productStyles.gridContainer} `}>
          <div><span>95%</span> <span>of hotels</span> <span>report increased efficiency with our system</span></div>
          <div className={productStyles.verticalLine}></div>
          <div><span>30%</span> <span>average cost reduction</span> <span>in operational expenses</span></div>
          <div className={productStyles.verticalLine}></div>
          <div><span>100+</span> <span>integrated features</span> <span>to cover all aspects of hotel management</span></div>
        </div>
      </div>

      <hr className={productStyles.horizontal} />

      <div className={productStyles.developmentSection}>
        <img src={pic2} className={productStyles.developmentImg} alt="Hotel Management System Features" />
        <div className={productStyles.developmentContent}>
          <h2>Key Functions & Modules</h2>
          <ul>
            <li><strong>Hotel Website:</strong> Beautiful Mobile Responsive Theme</li>
            <li><strong>Booking Engine:</strong> Online Room Booking Management along with payment gateway</li>
            <li><strong>Customer Management:</strong> Customer registration and KYC management</li>
            <li><strong>Billing:</strong> Simplified billing processes with integration to the accounting system</li>
            <li><strong>Invoicing:</strong> Generate professional invoices with ease</li>
            <li><strong>Inventory Management:</strong> Manage hotel inventory with real-time updates</li>
            <li><strong>Report Module:</strong> MIS Report & All Expenses Management</li>
            <li><strong>Webmaster:</strong> Dynamic Panel for website management</li>
            <li><strong>SEO Tools:</strong> Inbuilt tools to optimize your hotel's online presence</li>
            <li><strong>Restaurant Management System:</strong> Seamless integration with your hotel operations</li>
            <li><strong>Table and Banquet Hall Booking:</strong> Manage reservations for dining and events</li>
            <li><strong>User, Role, and Permission Management:</strong> Panel Creation and Access/Permission Module</li>
            <li><strong>HRMS System:</strong> Complete Staff Management – Staff Registrations, Attendance, leave and Salary Management</li>
            <li><strong>Manage OTA Platforms:</strong> Inventory synchronization across multiple platforms</li>
            <li><strong>Communication Tools:</strong> Mail account setup, WhatsApp Notifications, and API integration</li>
          </ul>
        </div>
      </div>

      <div className={productStyles.featuresSection}>
        <h2>Features of Our Hotel Management System</h2>
        <div className={productStyles.features}>
          <div><span>Responsive Design</span> <span>Ensure a seamless experience across all devices</span></div>
          <div className={productStyles.verticalLine}></div>
          <div><span>Integration</span> <span>Connect with external platforms and services</span></div>
          <div className={productStyles.verticalLine}></div>
          <div><span>Security</span> <span>Top-notch security to protect your data and operations</span></div>
        </div>
      </div>

      <hr className={productStyles.horizontal} />


      <div className={productStyles.whyUsSection}>
        <h2>Why Choose Our Hotel Management System?</h2>
        <p>
          Choosing our Hotel Management System means investing in a platform that is tailored to your unique needs. We offer a highly flexible and scalable solution that grows with your business, ensuring you stay competitive in the hospitality industry.
        </p>
        <p>
          Our commitment to innovation, quality, and customer satisfaction makes us the ideal partner for your hotel’s digital transformation. Let us help you streamline your operations, improve guest satisfaction, and achieve your business goals with our state-of-the-art management system.
        </p>
      </div>

      <hr className={productStyles.horizontal} />

    </div>
  )
}

export default Product3;
