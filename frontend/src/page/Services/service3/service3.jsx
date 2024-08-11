import React from 'react';
import service3 from './service3.module.css';

const Service3 = () => {
    const pic1 = 'https://www.se.com/ww/en/assets/v2/564/media/443380/998-21935769_Hannover_KV_electricity-IC-1920x540.jpg';
    const pic2 = 'https://us.images.westend61.de/0001484865pw/smiling-young-male-worker-holding-potted-plant-in-nursery-GRCF00461.jpg';
    const pic3 = 'https://cdn.britannica.com/33/104833-050-3B9DDEDA/Conservationists-water-quality-water-filtration-pond-Penn-Somerset.jpg';

    return (
        <div>
            <div className={service3.bannerContainer}>
                <img src={pic1} className={service3.bannerImg} alt="XAPER Technology" />
            </div>

            <hr className={service3.horizontal} />

            <div className={service3.topic}>
                <div className={service3.topicHeading}>
                    Transforming Waste Management with XAPER: The Future of Sustainable Solutions
                </div>
                <div className={service3.topicPara}>
                    <div>
                        XAPER is revolutionizing waste management by introducing advanced technology that not only segregates but also composts waste efficiently. This innovative solution significantly reduces waste volume and promotes eco-friendly practices.
                    </div>
                    <div>
                        Our patented technology supports the Go Green India initiative, aiming to create a sustainable environment by managing waste effectively at decentralized locations. By processing waste on-site, we reduce the need for transportation and minimize environmental impact.
                    </div>
                    <div>
                        Partnering with Virrgo Network means embracing a future where waste is converted into wealth. Our technology ensures no methane or leachate generation, making the process safe and environmentally friendly.
                    </div>
                </div>
            </div>
            <div className={service3.consultancySection}>
                <div className={service3.consultancyContent}>
                    <h2>Our Waste Management Consultancy Services</h2>
                    <p>
                        Virrgo Network offers comprehensive consultancy services that help clients maximize the benefits of XAPER technology. Our experts provide strategic guidance, innovative solutions, and continuous support to ensure successful implementation and operation.
                    </p>
                    <p>
                        We assist in identifying high-potential opportunities, conducting in-depth market analysis, and developing tailored waste management strategies. Our services encompass risk management, logistics planning, and ongoing support to ensure smooth operations and optimal outcomes.
                    </p>
                    <p>
                        Collaborate with us to unlock the full potential of your waste management investments and make informed decisions that drive long-term success.
                    </p>
                </div>
                <img src={pic2} className={service3.consultancyImg} alt="Waste Management Consultancy" />
            </div>

            <hr className={service3.horizontal} />

            <div className={service3.whyUsSection}>
                <h2>Why Choose XAPER?</h2>
                <p>
                    Choosing XAPER means opting for a technology that's not only efficient but also environmentally responsible. Our solution ensures significant waste reduction, cost savings, and compliance with regulatory standards.
                </p>
                <p>
                    With XAPER, you're investing in a sustainable future. Our client-first approach, deep industry knowledge, and commitment to excellence ensure that we deliver results that exceed expectations. Join us in making waste management more efficient and eco-friendly.
                </p>
            </div>

            <hr className={service3.horizontal} />

            <div className={service3.additionalInfoSection}>
                <img src={pic3} />
                <div>
                    <h2>How XAPER Works</h2>
                    <p>
                        The XAPER system employs advanced segregation and composting technology to process waste at the source. By breaking down organic waste into compost, the system not only reduces waste volume but also produces valuable by-products that can be used for soil enrichment.
                    </p>
                    <p>
                        The process begins with the segregation of waste into different categories. Organic waste is then fed into the composting unit, where it undergoes controlled aerobic decomposition. The resulting compost is rich in nutrients and can be used in agriculture, landscaping, and gardening.
                    </p>
                    <p>
                        Inorganic waste is further processed and recycled wherever possible, ensuring minimal residual waste that needs to be sent to landfills. This holistic approach not only addresses waste management but also contributes to environmental sustainability.
                    </p>
                </div>
            </div>

            <hr className={service3.horizontal} />

            <div className={service3.technologySection}>
                <h2>Technology and Innovations</h2>
                <p>
                    XAPER leverages cutting-edge technology to transform waste management practices. Our system incorporates advanced features such as automated waste segregation, real-time monitoring, and smart composting units.
                </p>
                <p>
                    The automated segregation system uses sensors and AI algorithms to identify and sort different types of waste materials accurately. This ensures that recyclable and compostable waste is processed correctly, reducing contamination and enhancing efficiency.
                </p>
                <p>
                    Our real-time monitoring system provides continuous data on waste processing, allowing for proactive management and quick adjustments to optimize performance. This transparency ensures that waste management operations are always running at their best.
                </p>
                <p>
                    The smart composting units are designed to handle various types of organic waste, maintaining optimal conditions for aerobic decomposition. These units are energy-efficient and require minimal maintenance, making them ideal for decentralized waste management.
                </p>
                <p>
                    Together, these innovations make XAPER a leader in sustainable waste management technology, offering solutions that are not only effective but also scalable and adaptable to different environments.
                </p>
            </div>

            <hr className={service3.horizontal} />

        </div>
    )
}

export default Service3