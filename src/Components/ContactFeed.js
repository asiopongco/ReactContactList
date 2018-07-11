import React, { Component } from 'react';
import Contact from './Contact'

class ContactFeed extends Component {

  render() {
    return (
      <div>
        {this.props.contacts.map((contact) =>
            <Contact contact={contact}/>
        )}
      </div>
    );
  }
}

export default ContactFeed;
