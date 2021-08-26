import React from "react"
import styled, { css } from "styled-components"

import { fadeIn, raiseIn } from "./animations"

const InputStyles = css`
  color: #221e1f;
  background-color: #ecede6;
  border: 2px solid #88724a;
  margin-bottom: 23px;
  padding: 0 20px;
`

const Input = styled.input`
  ${InputStyles};
  height: 35px;
`

const NameInput = styled(Input)`
  width: 260px;

  @media screen and (max-width: 640px) {
    width: 100%;
  }
`

const EmailInput = styled(Input)`
  width: 398px;

  @media screen and (max-width: 640px) {
    width: 100%;
  }

  @media screen and (min-width: 641px) and (max-width: 1024px) {
    width: 424px;
  }
`

const PhoneInput = styled(EmailInput)``

const MessageInput = styled.textarea`
  ${InputStyles};

  width: 398px;
  height: 100px;

  @media screen and (max-width: 640px) {
    width: 100%;
  }

  @media screen and (min-width: 641px) and (max-width: 1024px) {
    width: 424px;
  }
`

const CheckboxContainer = styled.div`
  color: #221e1f;
  font-size: 18px;

  > p {
    margin: 0;
    margin-bottom: 10px;
    font-weight: 500;
  }
`

const CheckboxInput = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`

const CheckboxLabel = styled.label`
  position: relative;
  top: -6px;
  font-size: 16px;
  color: #221e1f;

  @media screen and (max-width: 639px) {
    line-height: 1.8rem;
  }
`

const PrivacyText = styled.p`
  margin: 0;
  margin-bottom: 1rem;
  width: 398px;
  font-size: 16px;

  @media screen and (max-width: 640px) {
    width: 100%;
  }

  @media screen and (min-width: 641px) and (max-width: 1024px) {
    width: 424px;
  }
`

const SubmitButton = styled.button`
  width: 122px;
  height: 42px;
  ${InputStyles}
  margin-bottom: 10px;
  color: #221e1f;
  background-color: #8c7144;

  //DIN Extra Bold
  font-family: din-2014, sans-serif;
  font-weight: 800;
  font-style: normal;
  font-size: 11px;
  letter-spacing: 0.88px;
  text-transform: uppercase;

  cursor: pointer;
  position: relative;
  top: 0;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.5);
  transition: all 0.2s ease-out;

  &:hover {
    top: -4px;
    box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.1);
  }

  @media screen and (max-width: 639px) {
    margin-top: 20px;
    width: 100%;
  }
`

const FormContainer = styled.div`
  display: none;

  ${({ showForm }) =>
    showForm &&
    `
      display: block;
    `};
`

const messageAnimationStyles = css`
  opacity: 0;
  ${fadeIn}
  -webkit-animation: fadeIn 0.7s ease-in 0.3s forwards;
  animation: fadeIn 0.7s ease-in 0.3s forwards;
`

const SuccessMessage = styled.p`
  display: none;

  ${({ active }) =>
    active &&
    `
    display: block;
    margin: 0;
    
    font-size: 18px;
    font-weight: 500;

    ${messageAnimationStyles}
  `};
`

const ErrorMessage = styled.p`
  display: none;

  ${({ active }) =>
    active &&
    `
      display: block;
      margin: 0;

      font-size: 18px;
      font-weight: 500;

      ${messageAnimationStyles}
    `};
`

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      email: "",
      phone: "",
      message: "",
      pricing: false,
      walkthrough: false,
      updates: false,
      talking: false,
      showForm: true,
      showSuccess: false,
      showError: false,
    }
  }

  handleChange = e => {
    if (e.target.name === "Name") {
      this.setState({ name: e.target.value })
    } else if (e.target.name === "Phone Number") {
      this.setState({ phone: e.target.value })
    } else if (e.target.name === "Email") {
      this.setState({ email: e.target.value })
    } else if (e.target.name === "Message") {
      this.setState({ message: e.target.value })
    } else if (e.target.name === "Pricing") {
      this.setState(prevState => ({
        pricing: !prevState.pricing,
      }))
    } else if (e.target.name === "Booking a walk-through") {
      this.setState(prevState => ({
        walkthrough: !prevState.walkthrough,
      }))
    } else if (e.target.name === "Future updates") {
      this.setState(prevState => ({
        updates: !prevState.updates,
      }))
    } else if (e.target.name === "Talking to someone") {
      this.setState(prevState => ({
        talking: !prevState.talking,
      }))
    }
  }

  handleSubmit = e => {
    const sendToNetlify = async () => {
      try {
        const {
          name,
          email,
          phone,
          message,
          pricing,
          walkthrough,
          updates,
          talking,
        } = this.state
        const sendData = fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": "Lauker Homes Contact Form",
            "Name": name,
            "Phone Number": phone,
            "Email": email,
            "Message": message,
            "Pricing": pricing,
            "Booking a walk-through": walkthrough,
            "Future updates": updates,
            "Talking to someone": talking,
          }),
        })
        await sendData
        return this.setState({
          name: "",
          email: "",
          phone: "",
          message: "",
          pricing: false,
          walkthrough: false,
          updates: false,
          talking: false,
          showSuccess: true,
        })
      } catch (e) {
        return this.setState({
          showError: true,
        })
      }
    }

    sendToNetlify()
    e.preventDefault()
  }

  render() {
    const {
      name,
      email,
      phone,
      message,
      pricing,
      walkthrough,
      updates,
      talking,
      showForm,
      showSuccess,
      showError,
    } = this.state
    return (
      <FormContainer showForm={showForm}>
        <div>
          <form onSubmit={this.handleSubmit}>
            <NameInput
              type="text"
              name="Name"
              value={name}
              placeholder="name *"
              required
              onChange={this.handleChange}
            ></NameInput>
            <br></br>
            <EmailInput
              type="email"
              name="Email"
              value={email}
              placeholder="email *"
              required
              onChange={this.handleChange}
            ></EmailInput>
            <br></br>
            <PhoneInput
              type="tel"
              name="Phone Number"
              value={phone}
              placeholder="phone number * e.g. 123-456-789"
              pattern="[0-9]{10}"
              required
              onChange={this.handleChange}
            ></PhoneInput>
            <br></br>
            <MessageInput
              name="Message"
              value={message}
              placeholder="message"
              onChange={this.handleChange}
            ></MessageInput>
            <CheckboxContainer>
              <p>I would like to know about:</p>
              <CheckboxInput
                type="checkbox"
                name="Pricing"
                value={pricing}
                onChange={this.handleChange}
              ></CheckboxInput>
              <CheckboxLabel for="Pricing">Pricing</CheckboxLabel>
            </CheckboxContainer>
            <CheckboxContainer>
              <CheckboxInput
                type="checkbox"
                name="Booking a walk-through"
                value={walkthrough}
                onChange={this.handleChange}
              ></CheckboxInput>
              <CheckboxLabel for="Booking a walk-through">
                Booking a walk-through
              </CheckboxLabel>
            </CheckboxContainer>
            <CheckboxContainer>
              <CheckboxInput
                type="checkbox"
                name="Future updates"
                value={updates}
                onChange={this.handleChange}
              ></CheckboxInput>
              <CheckboxLabel for="Future updates">Future updates</CheckboxLabel>
            </CheckboxContainer>
            <CheckboxContainer>
              <CheckboxInput
                type="checkbox"
                name="Talking to someone"
                value={talking}
                onChange={this.handleChange}
              ></CheckboxInput>
              <CheckboxLabel for="Talking to someone">
                Talking to someone
              </CheckboxLabel>
            </CheckboxContainer>
            <br></br>
            <PrivacyText>
              Lauker Homes respects your privacy and will never sell any
              information about you.
            </PrivacyText>
            <SubmitButton type="submit">Submit</SubmitButton>
            <SuccessMessage active={showSuccess}>
              Thank you, we'll be in touch shortly.
            </SuccessMessage>
            <ErrorMessage active={showError}>
              Sorry, there was a problem with your submission. Please try again.
            </ErrorMessage>
          </form>
        </div>
      </FormContainer>
    )
  }
}
