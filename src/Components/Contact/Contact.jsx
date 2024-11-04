import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'




const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "8c122f72-73b2-4c02-8829-d9f790ecc473");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src= {msg_icon} alt="" /></h3>
            <p>Connect with us today, and let’s work 
            together to address your needs! We look forward to hearing from you soon.</p>
            <ul>
                <li><img src={mail_icon} alt="" />Contact@Edusity.org</li>
                <li><img src={phone_icon} alt="" />+1 123-456-789</li>
                <li><img src={location_icon} alt="" />77 Pioneer Square,Seattle<br/>WA 98101
USA

</li>
            </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your name </label>
                <input type="text" name='name' placeholder='Enter your name'
                required/>
                <label>Phone number </label>
                <input type="tel" name='phone' placeholder='Enter your mobile number'
                required/>
                <label>Write your message here</label>
                <textarea name="message" rows="6" placeholder='enter your message'required></textarea>
                <button type='submit' className='btn dark-btn'>submit now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
      
    </div>
  )
}

export default Contact
