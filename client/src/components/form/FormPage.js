import React, { Component } from "react";
import "../../style/css/about-us/AboutUs.css";
import axios from "axios";
import "../../style/css/contact/ContactPage.css";
import Spinner from "../Spinner/Spinner";
class FormPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      lastName: "",
      eMail: "",
      city: "",
      country: "",
      zipCode: "",
      phone: "",
      sent: false,
      message: "",
      loading: true,
    };
  }
  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  formSubmit = (e) => {
    e.preventDefault();
    let data = {
      name: this.state.name,
      lastName: this.state.lastName,
      eMail: this.state.eMail,
      city: this.state.city,
      country: this.state.country,
      zipCode: this.state.zipCode,
      phone: this.state.phone,
    };
    axios
      .post("/api/contact", data)
      .then((res) => {
        this.setState(
          {
            sent: res.data.success,
            message: res.data.message,
            loading: false,
          },
          this.resetForm()
        );
        console.log(res);
      })
      .catch(() => console.log("message is not sent"));
  };

  resetForm = () => {
    this.setState({
      name: "",
      lastName: "",
      eMail: "",
      city: "",
      country: "",
      zipCode: "",
      phone: "",
    });
    setTimeout(() => {
      this.setState({
        loading: true,
      });
    }, 2000);
  };

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <p>
          <input
            className="formInput"
            type="text"
            name="name"
            placeholder="First Name"
            value={this.state.name}
            onChange={this.handleInput}
          />
        </p>
        <p>
          <input
            className="formInput"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={this.state.lastName}
            onChange={this.handleInput}
          />
        </p>
        <p>
          <input
            className="formInput"
            type="email"
            name="eMail"
            placeholder="E-mail"
            value={this.state.eMail}
            onChange={this.handleInput}
          />
        </p>
        <p>
          <input
            className="formInput"
            type="text"
            name="city"
            placeholder="City"
            value={this.state.city}
            onChange={this.handleInput}
          />
        </p>
        <p>
          <input
            className="formInput"
            type="text"
            name="country"
            placeholder="State"
            value={this.state.country}
            onChange={this.handleInput}
          />
        </p>
        <p>
          <input
            className="formInput"
            type="text"
            name="zipCode"
            placeholder="ZIP CODE"
            value={this.state.zipCode}
            onChange={this.handleInput}
          />
        </p>
        <p>
          <input
            className="formInput"
            type="text"
            name="phone"
            placeholder="Telephone"
            value={this.state.phone}
            onChange={this.handleInput}
          />
        </p>
        <div></div>
        <div className="spinner">
          {!this.state.loading ? (
            <Spinner />
          ) : (
            <div>
              <div>
                {this.state.sent ? "Message is sent" : this.state.message}
              </div>
              <button className="ContactFormButton" type="submit">
                Submit
              </button>
              {this.props.children}
            </div>
          )}
        </div>
      </form>
    );
  }
}
export default FormPage;
