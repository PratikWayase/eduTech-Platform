import React, { useRef, useState } from 'react';

import './Testimonials.css';
import next_icon from '../../../assets/next-icon.png';
import back_icon from '../../../assets/back-icon.png';
import user_1 from '../../../assets/user-1.png';
import user_2 from '../../../assets/user-2.png';
import user_3 from '../../../assets/user-3.png';
import user_4 from '../../../assets/user-4.png';

const testimonialsData = [
    {
        image: user_1,
        name: "William Jackson",
        location: "Edusity, USA",
        paragraph: "Choosing to pursue my degree at Edusity was one of the best decisions I’ve ever made. The supportive community, state-of-the-art faculty, and commitment to academic excellence have truly exceeded my expectations."
    },
    {
        image: user_2,
        name: "Sophia Brown",
        location: "Tech Academy, UK",
        paragraph: "Tech Academy has opened up new horizons for me. The hands-on approach to learning and the fantastic support from mentors helped me achieve my goals and push beyond my limits."
    },
    {
        image: user_3,
        name: "Liam Chen",
        location: "Innovate Labs, Canada",
        paragraph: "Innovate Labs is a place where creativity thrives. The environment encourages growth, and the resources provided were essential to my success in the tech world."
    },
    {
        image: user_4,
        name: "Emma Wilson",
        location: "Global Education, Australia",
        paragraph: "Global Education offered me an incredible experience, both academically and personally. The vibrant campus life and knowledgeable faculty helped me shape my future with confidence."
    }
];

const Testimonials = () => {
    const slider = useRef();
    const [tx, setTx] = useState(0);
    const totalSlides = testimonialsData.length;
    const slideWidth = 100 / totalSlides;

    const slideForward = () => {
        if (tx > -(totalSlides - 2) * slideWidth) {
            setTx(tx - slideWidth);
            slider.current.style.transform = `translateX(${tx - slideWidth}%)`;
        }
    };

    const slideBackward = () => {
        if (tx < 0) {
            setTx(tx + slideWidth);
            slider.current.style.transform = `translateX(${tx + slideWidth}%)`;
        }
    };

    return (
        <div className='testimonials'>
            <img src={next_icon} alt="Next" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="Back" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider} style={{ transform: `translateX(${tx}%)`, width: `${50 * totalSlides}%` }}>
                    {testimonialsData.map((testimonial, index) => (
                        <li key={index} style={{ width: `${100 / totalSlides}%` }}>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={testimonial.image} alt="User" />
                                    <div>
                                        <h3>{testimonial.name}</h3>
                                        <span>{testimonial.location}</span>
                                    </div>
                                </div>
                                <p>{testimonial.paragraph}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Testimonials;

