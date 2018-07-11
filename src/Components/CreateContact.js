import React, { Component } from 'react';
import axios from 'axios';

class CreateContact extends Component {
  state = {
    name: '',
    phone: '',
    birthday:'',
    isSelected: false
  }

  onNameChange = (e) =>{
    this.setState({
      name: e.target.value
    })
  }

  onPhoneChange = (e) =>{
    this.setState({
      phone: e.target.value
    })
  }

  onBirthdayChange = (e) =>{
    this.setState({
      birthday: e.target.value
    })
  }

  handleSubmit = () =>{
    let newContact = new Object();
    newContact.name = this.state.name;
    newContact.phone = this.state.phone;
    newContact.birthday = this.state.birthday;
    this.props.submit(newContact);
    this.setState({name: '', phone:'', birthday:''});
  }

  onPress = (e) => {
    var val = this.state.isSelected;
    this.setState({isSelected: !val})
  }

  render() {
    return (
      <div>
        <div className ={this.state.isSelected ? 'hidden createBtn' : 'createBtn'}>
          <button onClick = {this.onPress} className = 'btn btn-primary'>Add Contact</button>
        </div>
        <div className = {this.state.isSelected ? 'CreateContact' : 'hidden CreateContact'}>
          <h1> Create Contact </h1>
          <input onChange = {this.onNameChange} className = "field" placeholder = "name"/>
          <input onChange = {this.onPhoneChange} className = "field" placeholder = "phone"/>
          <input onChange = {this.onBirthdayChange} className = "field" placeholder = "birthday"/>
          <div>
            <button onClick = {this.handleSubmit} className = "btn">Create</button>
            <button onClick = {this.onPress} className = "btn">Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateContact;
