import React from 'react';
import styled from 'styled-components';


const FormWrapper = styled.div`
  display: flex;
  margin: 30px 350px;
  background-color: #2d2d2d;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  width: 100%;
`;

const FormContainer = styled.div`
  padding: 20px;
  flex: 1;
`;

const ContactInfoContainer = styled.div`
  padding: 5px 100px;
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: black;
`;

const Title = styled.h1`
  color: #00A97F ;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  border: none;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: #3a3a3a;
  color: white;
`;

const TextArea = styled.textarea`
  grid-column: span 2;
  padding: 10px;
  border: none;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: #3a3a3a;
  color: white;
`;

const Select = styled.select`
  grid-column: span 2;
  padding: 10px;
  border: none;
  border-radius: 4px;
  margin-bottom: 10px;
  background-color: #3a3a3a;
  color: white;
`;

const Button = styled.button`
  grid-column: span 2;
  padding: 10px;
  background-color:  #00A97F;
  color: black;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
`;

const ContactDetail = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  margin-bottom: 50px;
`;

const ContactIcon = styled.span`
  margin-right: 10px;
  font-size: 1em;
  color:  #00A97F;
  border: 2px solid #2d2d2d;
  background-color: #2d2d2d;
  padding: 10px;
`;

const New = styled.span`
line-height: 1.7;
margin-left: 5px;
`;

const ContactForm = () => {
  return (
      <FormWrapper>
        <FormContainer>
          <Title>Let's work together</Title>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nescuint sit illo esse commodi.</p>
          <Form>
            <Input type="text" placeholder="First Name" />
            <Input type="text" placeholder="Last Name" />
            <Input type="email" placeholder="Email" />
            <Input type="tel" placeholder="Phone Number" />
            <Select>
              <option>Select a service</option>
              <option>Web Development</option>
              <option>ML Projects</option>
              <option>UI/UX Design</option>
            </Select>
            <TextArea rows="4" placeholder="Type your message here." />
            <Button type="submit">Send message</Button>
          </Form>
        </FormContainer>
        <ContactInfoContainer>
            <ContactDetail>
              <ContactIcon><i class='bx bxs-phone-call'></i></ContactIcon>
              <New>Phone No<br></br> (+91) 9345847062</New>
            </ContactDetail>
            <ContactDetail>
              <ContactIcon><i class='bx bxs-envelope'></i></ContactIcon>
               <New>Email <br></br>sowmikaarulkumar@gmail.com</New>
            </ContactDetail>
            <ContactDetail>
              <ContactIcon><i class='bx bx-current-location' ></i></ContactIcon> 
              <New>Location<br></br>Tiruchengode, 637302</New>
            </ContactDetail>
        </ContactInfoContainer>
      </FormWrapper>
  );
};

export default ContactForm;
