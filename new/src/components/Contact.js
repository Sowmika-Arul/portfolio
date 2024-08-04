import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';


// Wrapper for the entire form
const FormWrapper = styled.div`
  display: flex;
  margin: 30px 350px;
  background-color: #2d2d2d;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    margin: 30px 50px; /* Adjust margin for tablets */
  }

  @media (max-width: 768px) {
    flex-direction: column; /* Stack the form and contact info vertically on smaller screens */
    margin: 20px;
    width:90%;
  }
`;

// Container for the form
const FormContainer = styled.div`
  padding: 20px;
  flex: 1;

  @media (max-width: 768px) {
    padding: 10px; /* Adjust padding for smaller screens */
  }
`;

// Container for contact info
const ContactInfoContainer = styled.div`
  padding: 5px 100px;
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: black;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    padding: 10px; /* Adjust padding for tablets */
  }

  @media (max-width: 768px) {
    padding: 10px 0; /* Reduce padding and make it fit better on smaller screens */
  }
`;

// Title of the form
const Title = styled.h1`
  color: #00A97F;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Adjust font size for smaller screens */
  }
`;

// Form styles
const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Stack inputs in a single column on smaller screens */
  }
`;

// Input fields
const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: #3a3a3a;
  color: white;

  @media (max-width: 768px) {
    width: 97%; /* Ensure inputs take full width on smaller screens */
  }

  @media (max-width: 900px) {
    width: 95.5%; /* Ensure inputs take full width on smaller screens */
  }
`;

// Text area
const TextArea = styled.textarea`
  grid-column: span 2;
  padding: 10px;
  border: none;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: #3a3a3a;
  color: white;

  @media (max-width: 768px) {
    grid-column: span 1; /* Adjust for single column layout on smaller screens */
  }
`;

// Select input
const Select = styled.select`
  grid-column: span 2;
  padding: 10px;
  border: none;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: #3a3a3a;
  color: white;

  @media (max-width: 768px) {
    grid-column: span 1; /* Adjust for single column layout on smaller screens */
  }
`;

// Submit button
const Button = styled.button`
  grid-column: span 2;
  padding: 10px;
  background-color: #00A97F;
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;

  @media (max-width: 768px) {
    grid-column: span 1; /* Adjust for single column layout on smaller screens */
  }
`;

// Contact details container
const ContactDetail = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    margin-bottom: 20px; /* Adjust margin for smaller screens */
  }
`;

// Contact icon styling
const ContactIcon = styled.span`
  margin-right: 10px;
  font-size: 1em;
  color: #00A97F;
  border: 2px solid #2d2d2d;
  background-color: #2d2d2d;
  padding: 10px;
`;

// New text styling
const New = styled.span`
  line-height: 1.7;
  margin-left: 5px;
  color: white; /* Ensure text is readable */
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send('service_g84gtl3', 'template_yofvycm', {
      to_name: 'Sowmika', // Add the recipient's name if required
      from_name: `${formData.firstName} ${formData.lastName}`,
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone_number: formData.phoneNumber,
      service: formData.service,
      message: formData.message,
    }, 'AcwHyKvGLHdGTDQpD')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent successfully!'); // Show success message
        setFormData({ // Reset form data
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          service: '',
          message: ''
        });
      }, (err) => {
        console.log('FAILED...', err);
        alert('Failed to send the message. Please try again later.'); // Show error message
      });
  };

  return (
    <FormWrapper>
      <FormContainer>
        <Title>Let's work together</Title>
        <p>Let’s connect and explore how we can work together to create impactful solutions.</p>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <Input
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <Input
            type="tel"
            placeholder="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <Select
            name="service"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">Select a service</option>
            <option value="Web Development">Web Development</option>
            <option value="ML Projects">ML Projects</option>
            <option value="UI/UX Design">UI/UX Design</option>
          </Select>
          <TextArea
            rows="4"
            placeholder="Type your message here."
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <Button type="submit">Send message</Button>
        </Form>
      </FormContainer>
      <ContactInfoContainer>
        <ContactDetail>
          <ContactIcon><i className='bx bxs-phone-call'></i></ContactIcon>
          <New><strong style={{color:'#3a3a3a'}}>Phone No</strong><br /> (+91) 9345847062</New>
        </ContactDetail>
        <ContactDetail>
          <ContactIcon><i className='bx bxs-envelope'></i></ContactIcon>
          <New><strong style={{color:'#3a3a3a'}}>Email</strong> <br />sowmikaarulkumar@gmail.com</New>
        </ContactDetail>
        <ContactDetail>
          <ContactIcon><i className='bx bx-current-location'></i></ContactIcon>
          <New><strong style={{color:'#3a3a3a'}}>Location</strong><br />Tiruchengode, 637302</New>
        </ContactDetail>
      </ContactInfoContainer>
    </FormWrapper>
  );
};

export default ContactForm;