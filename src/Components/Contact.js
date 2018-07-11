import React, { Component } from 'react';

class Contact extends Component {

  render() {
    return (
      <div className="contactList">
        <div className = "contact">
          <h3>{this.props.contact.name}</h3>
          <p>{this.props.contact.phone}</p>
          <p>{this.props.contact.birthday}</p>
        </div>
        <br/>
      </div>


    );
  }
}
export default Contact;
