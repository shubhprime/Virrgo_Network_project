import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock, faEnvelopeOpenText, faChartArea, faChartLine, faShieldHalved, faBusinessTime, faPeopleGroup, faLaptop, faHotel, faLaptopCode, faWandMagicSparkles, faCashRegister, faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import home from './home.module.css';

const Home = () => {
  const pic6 = 'https://virgomediatech.com/assets/images/banner-img.jpg';
  const pic7 = 'https://virgomediatech.com/assets/images/home1.jpg';
  const pic8 = 'https://virgomediatech.com/assets/images/dots.png';

  return (
    <div>
      <div className={home.container}>
        <div className={home.bgImageContainer}>
        </div>
        <div className={home.containerCard}>
          <span>Welcome to Virrgo Network</span> <span>Time to grow, time to network!</span> <span>Our performane speaks, see for yourself</span>
        </div>
      </div>

      <hr className={home.horizontal} />

      <div className={home.intro}>
        <div className={home.introText}>
          <div className={home.introText1}>
            Welcome to <br /><span>Virrgo Network</span>
          </div>
          <div className={home.introText2}>
            Become a link to our network!
          </div>
          <div className={home.introText3}>
            Get ready to embrace the future, and ignite the flame of success.
          </div>
          <form action='/contact'>
            <button className={home.introBtn}>Get Started</button>
          </form>
        </div>
        <div className={home.introImg}>
          <img src={pic6} className={home.introImg1} alt="Intro" />
          <div className={` ${home.fontFavicon} ${home.fontFavicon1}`}>
            <FontAwesomeIcon icon={faChartArea} style={{ color: "#6168ff" }} className={home.icon1} />
            <div>Strategy</div>
          </div>
          <div className={` ${home.fontFavicon} ${home.fontFavicon2}`}>
            <FontAwesomeIcon icon={faChartLine} style={{ color: "#0abf73" }} className={home.icon2} />
            <div>Business Analysis</div>
          </div>
          <div className={` ${home.fontFavicon} ${home.fontFavicon3}`}>
            <FontAwesomeIcon icon={faShieldHalved} style={{ color: "#990033" }} className={home.icon3} />
            <div>High Success Rate</div>
          </div>
        </div>
      </div>

      <hr className={home.horizontal} />

      <div className={home.whatWeDo}>
        <div className={home.whatWeDoText1}>
          What do we do?
        </div>
        <div className={home.whatWeDoText2}>
          We stay one step ahead of the game!
        </div>
      </div>

      <div className={home.service}>
        <div className={home.serviceCategory}>
          <div className={home.serviceCategoryContainer}>
            <div className={`${home.fontFavicon} ${home.iconfaBusinessTime}`}>
              <FontAwesomeIcon icon={faBusinessTime} style={{ color: "#990033" }} className={` ${home.serviceCategoryIcon} ${home.serviceCategoryIcon1} `} />
            </div>
            <div className={home.serviceCategoryTitle}>
              IT Products
            </div>
            <div className={home.serviceCategoryDesc}>
              As a leading IT company, it becomes our responsibility to deliver the best IT products and software, ranging from cutting-edge web application development solutions to high order software solutions.
            </div>
          </div>

          <div className={home.serviceCategoryContainer}>
            <div className={`${home.fontFavicon} ${home.iconfaChartLine}`}>
              <FontAwesomeIcon icon={faChartLine} style={{ color: "#6168ff" }} className={` ${home.serviceCategoryIcon} ${home.serviceCategoryIcon2} `} />
            </div>
            <div className={home.serviceCategoryTitle}>
              Business Growth
            </div>
            <div className={home.serviceCategoryDesc}>
              Getting access to the best-in-class data available is the need of the hour. That's where we come in. Providing state of the art software to businesses, especially the hospitality industry that allows them to manage their own data and keep a track of their records.
            </div>
          </div>

          <div className={home.serviceCategoryContainer}>
            <div className={`${home.fontFavicon} ${home.iconfaPeopleGroup}`}>
              <FontAwesomeIcon icon={faPeopleGroup} style={{ color: "#0abf73" }} className={` ${home.serviceCategoryIcon} ${home.serviceCategoryIcon3} `} />
            </div>
            <div className={home.serviceCategoryTitle}>
              Digital Marketing
            </div>
            <div className={home.serviceCategoryDesc}>
              Helping our clients in getting their products in front of their desired customers in the most efficient way possible, by the power of PPC ads.
            </div>
          </div>
        </div>
      </div>

      <div className={home.serviceFlex}>
        <div className={home.serviceFlexLeftSection}>
          <div className={home.imageContainer}>
            <img src={pic8} className={home.imagebg} alt="Service Flex Background" />
            <img src={pic7} className={home.image} alt="Service Flex" />
          </div>
          <div className={home.overlay}>
            <div>Get a price quote today!</div>
            <div>We are controlling the market with a very affordable price range</div>
            <div>
              <div className={`${home.fontFavicon} ${home.iconfaEnvelopeOpenText}`}>
                <FontAwesomeIcon icon={faEnvelopeOpenText} style={{ color: "#6168ff" }} className={home.overlayEmailIcon} />
              </div>
              <div>info@virgomediatech.com</div>
            </div>
          </div>
        </div>
        <div className={home.serviceFlexText}>
          <div>
            <div>
              We provide skills that help your business grow
            </div>
            <div>
              We are leaders in our field, consistently delivering flawless service, as evidenced by our clients' repeated satisfaction and results.
            </div>
          </div>
          <div>
            <div className={`${home.fontFavicon} ${home.iconfaClock}`}>
              <FontAwesomeIcon icon={faClock} style={{ color: "#990033" }} className={` ${home.serviceFlexTextIcon} ${home.serviceFlexTextfaClock} `} />
            </div>
            <div>
              <div>
                Start your own business in minutes
              </div>
              <div>
                We understand the challenges organizations have faced in building and maintaining robust cybersecurity practices.
              </div>
            </div>
          </div>
          <div>
            <div className={`${home.fontFavicon} ${home.iconfaLaptop}`}>
              <FontAwesomeIcon icon={faLaptop} style={{ color: "#0abf53" }} className={` ${home.serviceFlexTextIcon} ${home.serviceFlexTextfaLaptop} `} />
            </div>
            <div>
              <div>
                Elevate your brand with our bespoke web application
              </div>
              <div>
                We help in taking your company online and bring it to the public view.
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr className={home.horizontal} />

      <div className={home.final}>
        <div className={home.finalText}>
          What services can you avail from us?
        </div>

        <div className={home.serviceCardContainer}>
          <div className={home.serviceCard}>
            <div>
              <div className={`${home.fontFavicon} ${home.iconfaHotel}`}>
                <FontAwesomeIcon icon={faHotel} style={{ color: "#1beee0", }} className={home.finalImage} />
              </div>
              <div className={home.finalNumber}>01</div>
            </div>
            <div className={home.finalDesc}>Hotel Management System</div>
            <div>Our hotel management system makes running your hotel a breeze. With easy booking management, streamlined check-ins, and detailed guest profiles, you'll keep everything running smoothly. Upgrade your hotel operations with our user-friendly software designed to enhance guest experiences and boost efficiency.</div>
          </div>
          <div className={home.serviceCard}>
            <div>
              <div className={`${home.fontFavicon} ${home.iconfaLaptopCode}`}>
                <FontAwesomeIcon icon={faLaptopCode} style={{ color: "#00ff55", }} className={home.finalImage} />
              </div>
              <div className={home.finalNumber}>02</div>
            </div>
            <div className={home.finalDesc}>Web Application Development</div>
            <div>We craft web applications that make your business stand out online. From sleek front-end designs to robust back-end systems, we’ve got the expertise to build solutions that fit your needs and grow with you. Let’s create something amazing together!</div>
          </div>
          <div className={home.serviceCard}>
            <div>
              <div className={`${home.fontFavicon} ${home.iconfaWandMagicSparkles}`}>
                <FontAwesomeIcon icon={faWandMagicSparkles} style={{ color: "#f519d8", }} className={home.finalImage} />
              </div>
              <div className={home.finalNumber}>03</div>
            </div>
            <div className={home.finalDesc}>UI/UX Design</div>
            <div>Our UI/UX design services turn your ideas into visually stunning and user-friendly experiences. We focus on creating intuitive interfaces and engaging user experiences that keep your audience coming back. Let's make your digital presence both beautiful and functional!</div>
          </div>
          <div className={home.serviceCard}>
            <div>
              <div className={`${home.fontFavicon} ${home.iconfaPeopleGroup}`}>
                <FontAwesomeIcon icon={faPeopleGroup} style={{ color: "#ff0026", }} className={home.finalImage} />
              </div>
              <div className={home.finalNumber}>04</div>
            </div>
            <div className={home.finalDesc}>Digital Marketing</div>
            <div>Our digital marketing services are designed to boost your online presence and drive real results. From targeted ad campaigns to compelling content, we help you reach your audience effectively and grow your brand’s visibility. Let's get your message out there and make an impact!</div>
          </div>
          <div className={home.serviceCard}>
            <div>
              <div className={`${home.fontFavicon} ${home.iconfaCashRegister}`}>
                <FontAwesomeIcon icon={faCashRegister} style={{ color: "#ffea00", }} className={home.finalImage} />
              </div>
              <div className={home.finalNumber}>05</div>
            </div>
            <div className={home.finalDesc}>E-Commerce Solution</div>
            <div>We offer e-commerce solutions that make selling online easy and effective. Whether you're starting from scratch or upgrading your existing store, we provide tailored solutions to enhance your online shopping experience, optimize sales, and drive growth. Let's turn your e-commerce vision into reality!</div>
          </div>
          <div className={home.serviceCard}>
            <div>
              <div className={`${home.fontFavicon} ${home.iconfaHouseChimney}`}>
                <FontAwesomeIcon icon={faHouseChimney} style={{ color: "#ffa200", }} className={home.finalImage} />
              </div>
              <div className={home.finalNumber}>06</div>
            </div>
            <div className={home.finalDesc}>Real Estate</div>
            <div>Our real estate solutions simplify property management and sales. From creating user-friendly listings to streamlining transactions, we offer tools that make buying, selling, and managing properties easier. Let us help you transform your real estate business with effective digital solutions!</div>
          </div>
        </div>
      </div>

      <hr className={home.horizontal} />

    </div>
  );
}

export default Home;
