import React from 'react';
import { Link } from 'react-router-dom';
import footer from './Footer.module.css';

const Footer = () => {
    const LinkedinIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={40} height={40} color={"#ffffff"} fill={"none"}>
            <path d="M7 10V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M11 13V17M11 13C11 11.3431 12.3431 10 14 10C15.6569 10 17 11.3431 17 13V17M11 13V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.00801 7L6.99902 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        </svg>
    );

    const FacebookIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={40} height={40} color={"#ffffff"} fill={"none"}>
            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M16.9265 8.02637H13.9816C12.9378 8.02637 12.0894 8.86847 12.0817 9.91229L11.9964 21.4268M10.082 14.0017H14.8847" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    const TwitterIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={40} height={40} color={"#ffffff"} fill={"none"}>
            <path d="M2.50012 12C2.50012 7.52166 2.50012 5.28249 3.89136 3.89124C5.28261 2.5 7.52178 2.5 12.0001 2.5C16.4785 2.5 18.7176 2.5 20.1089 3.89124C21.5001 5.28249 21.5001 7.52166 21.5001 12C21.5001 16.4783 21.5001 18.7175 20.1089 20.1088C18.7176 21.5 16.4785 21.5 12.0001 21.5C7.52178 21.5 5.28261 21.5 3.89136 20.1088C2.50012 18.7175 2.50012 16.4783 2.50012 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.00012 17L11.1937 12.8065M17.0001 7L12.8066 11.1935M12.8066 11.1935L9.7779 7H7.00012L11.1937 12.8065M12.8066 11.1935L17.0001 17H14.2223L11.1937 12.8065" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    const InstagramIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={40} height={40} color={"#ffffff"} fill={"none"}>
            <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M17.5078 6.5L17.4988 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )

    const logo =
        'https://media.licdn.com/dms/image/D560BAQGm4qQ96RJxcA/img-crop_100/0/1721250939795?e=1730332800&v=beta&t=jeuej4XmT9CWbe5_jknWHJjegQGWGzPGuCuN8EUo2QU';

    return (
        <div className={footer.container}>
            <div className={footer.textContainer}>
                <div className={footer.styles}>
                    In a world of continuous change, let us be your harbinger to carry and guide you in this journey.
                </div>
                <div className={footer.styles}>
                    Stay ahead of the rest of your competition. Become a monopoly.
                </div>
            </div>
            <div className={footer.iconContainer}>
                <div className={footer.logo}>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                        <img src={logo} alt="Virrgo Network" width="100" height="100" />
                    </a>
                </div>
                <div className={footer.socials}>
                    <a href="https://www.linkedin.com/company/virrgonetwork/" target="_blank" rel="noopener noreferrer">
                        <LinkedinIcon />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <FacebookIcon />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <TwitterIcon />
                    </a>
                    <a href="" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon />
                    </a>
                </div>
            </div>
            <div>
                <div className={footer.pages}>
                    <a href="/" rel="noopener noreferrer">
                        Home
                    </a>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScnTDCJMshmG8kkpr-O2h2ar5Dr0kWyNyZZTiX4pkJuSX-hig/viewform" target="_blank" rel="noopener noreferrer">
                        Career
                    </a>
                    <a href="/about" rel="noopener noreferrer">
                        About Us
                    </a>
                    <a href="/contact" rel="noopener noreferrer">
                        Contact Us
                    </a>
                </div>
            </div>
            <div className={footer.copywrite}>
                &copy; 2024 Virrgo Network.
            </div>
        </div>
    );
};

export default Footer;
