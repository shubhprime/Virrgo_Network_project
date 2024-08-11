import React from 'react';
import service2 from './service2.module.css';

const Service2 = () => {
  const pic1 = 'https://www.showtimeevent.com/assets/img/Slider2.jpg';
  const pic2 = 'https://img.freepik.com/free-photo/portrait-teenagers-with-80-s-summer-aesthetic_52683-142115.jpg';

  return (
    <div>
      <div className={service2.bannerContainer}>
        <img src={pic1} className={service2.bannerImg} alt="Event Management" />
      </div>

      <hr className={service2.horizontal} />

      <div className={` ${service2.stats} ${service2.gridContainer} `}>
        <div><span>$1.5T</span> <span>global event market</span> <span>value by 2028</span></div>
        <div className={service2.verticalLine}></div>
        <div><span>30%</span> <span>increase in tourism</span> <span>due to major events</span></div>
        <div className={service2.verticalLine}></div>
        <div><span>26</span> <span>million jobs</span> <span>supported by events</span></div>
      </div>
      <div className={service2.topic}>
        <div className={service2.topicHeading}>
          Elevating Events to Unprecedented Levels of Success with Expert Insights and Strategic Guidance
        </div>
        <div className={service2.topicPara}>
          <div>
            Investing in event management is more than organizing an event—it's about creating memorable experiences and driving substantial economic impact. The event industry is a dynamic force, contributing significantly to the economy by fostering tourism, local business growth, and job creation.
          </div>
          <div>
            A well-managed event can attract thousands of attendees, generating significant revenue for local businesses and increasing the area's visibility. For example, major events like conferences and festivals can bring millions of dollars in economic impact, supporting hospitality, retail, and other local industries.
          </div>
          <div>
            Our consultancy services focus on maximizing these benefits by providing strategic planning, comprehensive market analysis, and tailored event management solutions. We ensure that each event not only meets but exceeds expectations, creating lasting value for stakeholders.
          </div>
        </div>

      </div>

      <hr className={service2.horizontal} />

      <div className={service2.consultancySection}>
        <div className={service2.consultancyContent}>
          <h2>Our Event Management Investment Consultancy Services</h2>
          <p>
            Our consultancy firm offers comprehensive event management investment services designed to help you achieve outstanding success. Our team of experts provides strategic guidance, innovative solutions, and personalized support to ensure your events are impactful and profitable.
          </p>
          <p>
            We help you identify high-potential opportunities, conduct in-depth market analysis, and develop bespoke event strategies. Our services also encompass risk management, logistics planning, and continuous support to ensure your events run smoothly and achieve your desired outcomes.
          </p>
          <p>
            Partner with us to unlock the full potential of your event investments and make informed decisions that drive long-term success.
          </p>
        </div>
        <img src={pic2} className={service2.consultancyImg} alt="Event Management Consultancy" />
      </div>

      <hr className={service2.horizontal} />

      <div className={service2.whyUsSection}>
        <h2>Why Work With Us?</h2>
        <p>
          When you choose to work with us, you're choosing more than just a consultancy. You're choosing a team that's dedicated to making your vision a reality. We pride ourselves on our deep industry knowledge and our client-first approach. We believe in building strong, transparent relationships and delivering results that exceed expectations.
        </p>
        <p>
          We're here to navigate the complexities of event management with you, providing the insights and support you need every step of the way. Let's work together to create events that are not just successful, but unforgettable.
        </p>
      </div>

      <hr className={service2.horizontal} />

    </div>
  )
}

export default Service2;