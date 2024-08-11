import React, { useState } from 'react';
import Form from './ContactForm.module.css';

const ContactForm = () => {
    const [firstNameFocused, setFirstNameFocused] = useState(false);
    const [lastNameFocused, setLastNameFocused] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [companyFocused, setCompanyFocused] = useState(false);
    const [phoneFocused, setPhoneFocused] = useState(false);
    const [queryFocused, setQueryFocused] = useState(false);

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        company: "",
        phone: '',
        query: "",
    });

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { firstName, email, phone, query } = data;
        if (firstName && email && phone && query) {
                const response = await fetch(`${import.meta.env.VITE_SERVER_DOMAIN}/contact`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                });

                const dataRes = await response.json()
                console.log(dataRes);

                if (response.ok) {
                    alert("Submission successful");
                } else {
                    alert("Submission failed");
                }
            }
         else {
            alert("Please Enter required fields");
        }
    };

    console.log('Server Domain:', import.meta.env.VITE_SERVER_DOMAIN); // Debug statement

    return (
        <>
            <div>
                <div className={Form.container}>
                    <form onSubmit={handleSubmit}>
                        <div className={Form.name}>
                            <div className={Form.LineBreaker}>
                                <label
                                    htmlFor="firstName"
                                    className={firstNameFocused ? Form.floatingLabel : ''}
                                >
                                    First Name <span className={Form.required}>*</span>
                                </label>
                                <br />
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="Your first name"
                                    value={data.firstName}
                                    onChange={handleOnChange}
                                    className={Form.input}
                                    onFocus={() => setFirstNameFocused(true)}
                                    onBlur={(e) => setFirstNameFocused(e.target.value !== '')}
                                    required
                                />
                            </div>
                            <div className={Form.LineBreaker}>
                                <label
                                    htmlFor="lastName"
                                    className={lastNameFocused ? Form.floatingLabel : ''}
                                >
                                    Last Name
                                </label>
                                <br />
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Your last name"
                                    value={data.lastName}
                                    onChange={handleOnChange}
                                    className={Form.input}
                                    onFocus={() => setLastNameFocused(true)}
                                    onBlur={(e) => setLastNameFocused(e.target.value !== '')}
                                />
                            </div>
                        </div>

                        <div className={Form.LineBreaker}>
                            <label
                                htmlFor="email"
                                className={emailFocused ? Form.floatingLabel : ''}
                            >
                                Your Email <span className={Form.required}>*</span>
                            </label>
                            <br />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="example@dot.com"
                                value={data.email}
                                onChange={handleOnChange}
                                className={Form.input}
                                onFocus={() => setEmailFocused(true)}
                                onBlur={(e) => setEmailFocused(e.target.value !== '')}
                                required
                            />
                        </div>

                        <div className={Form.LineBreaker}>
                            <label
                                htmlFor="company"
                                className={companyFocused ? Form.floatingLabel : ''}
                            >
                                Company
                            </label>
                            <br />
                            <input
                                type="text"
                                id="company"
                                name="company"
                                placeholder="Your Company"
                                value={data.company}
                                onChange={handleOnChange}
                                className={Form.input}
                                onFocus={() => setCompanyFocused(true)}
                                onBlur={(e) => setCompanyFocused(e.target.value !== '')}
                            />
                        </div>

                        <div className={Form.LineBreaker}>
                            <label
                                htmlFor="phone"
                                className={phoneFocused ? Form.floatingLabel : ''}
                            >
                                Phone Number <span className={Form.required}>*</span>
                            </label>
                            <br />
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                placeholder="Phone Number"
                                value={data.phone}
                                onChange={handleOnChange}
                                className={Form.input}
                                inputMode="numeric"
                                pattern="[\d\-\+]*"
                                onFocus={() => setPhoneFocused(true)}
                                onBlur={(e) => setPhoneFocused(e.target.value !== '')}
                                required
                            />
                        </div>

                        <div className={Form.LineBreaker}>
                            <label
                                htmlFor="query"
                                className={queryFocused ? Form.floatingLabel : ''}
                            >
                                What's on your mind? <span className={Form.required}>*</span>
                            </label>
                            <br />
                            <textarea
                                id="query"
                                name="query"
                                value={data.query}
                                onChange={handleOnChange}
                                className={`${Form.input} ${Form.inputQuery}`}
                                onFocus={() => setQueryFocused(true)}
                                onBlur={(e) => setQueryFocused(e.target.value !== '')}
                                required
                            />
                        </div>
                        <div className={Form.buttonContainer}>
                            <button type="submit" className={Form.button}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ContactForm;
