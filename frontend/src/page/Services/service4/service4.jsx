import React from 'react'
import service4 from './service4.module.css';


const Service4 = () => {
    const pic1 = 'https://media.resolutiondigital.com.au/attachment/42/strategy-branding-recbanner.jpg?cw=1200&ch=600&crop.type=trim';
    const pic2 = 'https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/1eiTv1ZSAhu6ZaTJyDZF/media/65d2edecf386a81572a14306.png';
    const pic3 = 'https://digitalally.in/wp-content/uploads/2022/04/ab1.jpg';

    return (
        <div>
            <div className={service4.bannerContainer}>
                <img src={pic1} className={service4.bannerImg} alt="Digital Marketing" />
            </div>

            <hr className={service4.horizontal} />

            <div className={service4.topic}>
                <div className={service4.topicHeading}>
                    Elevate Your Brand with Our Comprehensive Digital Marketing Solutions
                </div>
                <div className={service4.topicPara}>
                    <div>
                        At Virrgo Network, we specialize in creating innovative digital marketing strategies that drive brand growth and engagement. Our solutions are tailored to meet the unique needs of each client, ensuring maximum impact.
                    </div>
                    <div>
                        Our expertise spans across various digital channels, including social media, SEO, content marketing, and paid advertising. We leverage data-driven insights to optimize campaigns and achieve measurable results.
                    </div>
                    <div>
                        Partner with us to unlock the full potential of your brand online. Our dedicated team of digital marketing professionals is committed to delivering exceptional results that exceed your expectations.
                    </div>
                </div>
            </div>
            <div className={service4.consultancySection}>
                <div className={service4.consultancyContent}>
                    <h2>Our Digital Marketing Consultancy Services</h2>
                    <p>
                        Virrgo Network offers expert consultancy services to help clients navigate the complexities of digital marketing. Our consultants provide strategic advice, innovative solutions, and continuous support to ensure your campaigns are successful.
                    </p>
                    <p>
                        We assist in identifying high-potential opportunities, conducting thorough market analysis, and developing customized marketing strategies. Our services cover risk management, campaign planning, and ongoing optimization to ensure the best outcomes.
                    </p>
                    <p>
                        Collaborate with us to enhance your digital presence and make data-driven decisions that drive long-term success.
                    </p>
                </div>
                <img src={pic2} alt="Digital Marketing Consultancy" className={service4.lowerImg} />
            </div>

            <hr className={service4.horizontal} />

            <div className={service4.whyUsSection}>
                <h2>Why Choose Us?</h2>
                <p>
                    Choosing Virrgo Network means opting for a partner that is deeply committed to your success. Our team combines industry expertise, innovative strategies, and a client-first approach to deliver exceptional results.
                </p>
                <p>
                    With our digital marketing solutions, you can achieve significant brand growth, increased engagement, and higher ROI. Join us in transforming your digital presence and reaching new heights.
                </p>
            </div>

            <div className={service4.additionalInfoSection}>
                <h2>Our Approach</h2>
                <p>
                    Our approach to digital marketing is rooted in a deep understanding of your brand and audience. We start by conducting a comprehensive analysis to identify key opportunities and challenges.
                </p>
                <p>
                    We then develop a tailored strategy that leverages the latest tools and techniques to achieve your marketing goals. Our team continuously monitors and optimizes campaigns to ensure they deliver the best possible results.
                </p>
                <p>
                    Whether you're looking to increase brand awareness, drive traffic, or boost conversions, our solutions are designed to meet your specific needs and deliver measurable success.
                </p>
            </div>

            <hr className={service4.horizontal} />

            <div className={service4.technologySection}>
                <img src={pic3} />
                <div>
                    <h2>Innovative Strategies and Tools</h2>
                    <p>
                        We use the latest strategies and tools to ensure your digital marketing campaigns are effective and efficient. From advanced analytics to cutting-edge SEO techniques, we stay ahead of the curve to deliver the best results.
                    </p>
                    <p>
                        Our team is proficient in a wide range of digital marketing tools, including social media management platforms, email marketing software, and PPC management systems. This allows us to create cohesive and impactful campaigns that drive real results.
                    </p>
                    <p>
                        Stay ahead of the competition with our innovative digital marketing solutions. Partner with Virrgo Network to elevate your brand and achieve your marketing goals.
                    </p>
                </div>
            </div>

            <hr className={service4.horizontal} />

        </div>
    )
}

export default Service4;