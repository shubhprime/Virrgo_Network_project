import React from 'react';
import about from './about.module.css';

const About = () => {
  const pic1 = 'https://authenticrecognition.com/wp-content/uploads/2022/08/Business_Woman_AdobeStock_157632330-scaled.jpg';
  const pic2 = 'https://virgomediatech.com/assets/images/home2.jpg';
  const picOwner = 'https://virgomediatech.com/assets/images/paras.jpeg'
  const dotspic = 'https://virgomediatech.com/assets/images/dots.png';

  return (
    <div className={about.container}>
      <div className={about.imageContainer}>
        <img src={pic1} alt="A Man" className={about.image} />
        <div className={about.overlay}>
          <div>About Virrgo</div>
          <div>Our People</div>
          <div>There's a reason why our clients say we feel like family: our supportive team puts you before everything else.</div>
        </div>
      </div>

      <hr className={about.horizontal} />

      <div className={about.infoContainer}>
        <div className={about.imageStyle}>
          <div>
            <img src={pic2} alt="Man and a Lady" className={`${about.image} ${about.pic2}`} />
          </div>
          <div>
            <img src={dotspic} alt="Dots" className={`${about.image} ${about.dotspic}`} />
          </div>
        </div>
        <div className={about.textStyle}>
          <h1>Welcome to the world's best business company</h1>
          <div className={about.text}>
            At Virrgo Network, we work as your trusted partner in navigating the complex landscape of business growth. As a premier business growth solution provider, we understand the challenges organizations have faced in building and maintaining robust cybersecurity practices.
          </div>
          <div className={about.titles}>
            <div className={about.ourMission}>
              <h2>Our Mission</h2>
              <div className={about.text}>
                Our mission is to empower businesses with cutting-edge technology solutions that drive efficiency, enhance user experiences, and fuel growth. We aim to be a strategic partner for our clients, helping them navigate the ever-evolving digital landscape with confidence.
              </div>
            </div>
            <div className={about.ourVision}>
              <h2>Our Vision</h2>
              <div className={about.text}>
                Our vision is to be a catalyst for positive change through innovative technology solutions. We aspire to be recognized globally for our commitment to excellence, ethical practices, and relentless pursuit of technological advancements.
              </div>
            </div>
            <div className={about.ourValues}>
              <h2>Our Philosophy & Values</h2>
              <div className={about.text}>
                Our philosophy is rooted in a commitment to excellence, innovation, and client empowerment. We believe in shaping the future of technology through a set of core principles that define our approach and set us apart in the dynamic IT landscape.
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className={about.horizontal} />

      <div className={about.team}>
        <div className={about.teamText}>
          <h1>Meet the team</h1>
          <div>
            All those involved in giving the best service possible. Welcome to Virrgo Network - where your ideas meet our expertise!
          </div>
        </div>
        <div className={about.teamPic}>
          <img src={picOwner} alt='Picture'/>
          <h2>Paras Sharma</h2>
          <div>Director of Operations, Virrgo Network</div>
        </div>
      </div>

      <hr className={about.horizontal} />

    </div>
  );
}

export default About;
