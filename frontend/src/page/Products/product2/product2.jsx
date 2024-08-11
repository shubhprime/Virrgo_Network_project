import React from 'react';
import productStyles from './product2.module.css';

const Product2 = () => {
  const pic1 = 'https://kpitechservices.com/assets/images/breadcrumbs/mobile_app.jpg';
  const pic2 = 'https://cdn.create.vista.com/api/media/small/164582032/stock-photo-mature-man-attending-computer-class';

  return (
    <div>
      <div className={productStyles.bannerContainer}>
        <img src={pic1} className={productStyles.bannerImg} alt="App Development" />
      </div>

      <hr className={productStyles.horizontal} />

      <div className={productStyles.topic}>
        <div className={productStyles.topicHeading}>
          Crafting Innovative Mobile Apps for a Connected World
        </div>
        <div className={productStyles.topicPara}>
          <div>
            Our app development services are designed to bring your ideas to life with high-quality, scalable, and user-friendly mobile applications. Whether you're targeting iOS, Android, or both, we ensure your app delivers a seamless experience across all platforms.
          </div>
          <div>
            From concept to launch, our team handles every aspect of app development, including UI/UX design, backend integration, and post-launch support. We focus on creating apps that not only look great but also provide real value to users.
          </div>
          <div>
            By partnering with us, you gain access to cutting-edge technologies and industry best practices, ensuring your app is built to last in a competitive market.
          </div>
        </div>
        <div className={` ${productStyles.stats} ${productStyles.gridContainer} `}>
          <div><span>$156 Billion</span> <span>in-app revenue</span> <span>generated worldwide in 2023</span></div>
          <div className={productStyles.verticalLine}></div>
          <div><span>3.8 Million</span> <span>apps available</span> <span>on Google Play Store</span></div>
          <div className={productStyles.verticalLine}></div>
          <div><span>~60%</span> <span>of users</span> <span>prefer mobile apps over websites</span></div>
        </div>
      </div>

      <hr className={productStyles.horizontal} />

      <div className={productStyles.developmentSection}>
        <img src={pic2} className={productStyles.developmentImg} alt="App Development Process" />
        <div className={productStyles.developmentContent}>
          <h2>Our App Development Process</h2>
          <p>
            We follow a rigorous app development process to ensure that each project meets the highest standards of quality:
          </p>
          <p>
            <strong>1. Ideation and Strategy:</strong> Collaborating with you to define the app's purpose, target audience, and key features.
          </p>
          <p>
            <strong>2. Design and Prototyping:</strong> Creating intuitive and engaging user interfaces that align with your brand.
          </p>
          <p>
            <strong>3. Development:</strong> Utilizing the latest technologies to build a high-performance, scalable app.
          </p>
          <p>
            <strong>4. Testing and Quality Assurance:</strong> Conducting extensive testing to ensure the app is bug-free and performs well across devices.
          </p>
          <p>
            <strong>5. Deployment and Support:</strong> Launching the app on the App Store and Google Play, with ongoing support to keep it running smoothly.
          </p>
        </div>
      </div>
      <div className={productStyles.featuresSection}>
        <h2>Features of Our App Development Services</h2>
        <div className={productStyles.features}>
          <div><span>Cross-Platform Development</span> <span>Build once, deploy on both iOS and Android</span></div>
          <div className={productStyles.verticalLine}></div>
          <div><span>Custom Integrations</span> <span>Integrate with third-party APIs and services</span></div>
          <div className={productStyles.verticalLine}></div>
          <div><span>Robust Security</span> <span>Protect your app and user data with top-notch security measures</span></div>
        </div>
      </div>

      <hr className={productStyles.horizontal} />

      <div className={productStyles.whyUsSection}>
        <h2>Why Choose Our App Development Services?</h2>
        <p>
          Our commitment to innovation, quality, and customer satisfaction sets us apart. We bring deep expertise in mobile app development, ensuring that your app not only meets your expectations but also delights your users.
        </p>
        <p>
          With a focus on delivering value and achieving your business objectives, we are your trusted partner in the competitive world of mobile apps.
        </p>
      </div>

      <hr className={productStyles.horizontal} />

    </div>
  )
}

export default Product2;

