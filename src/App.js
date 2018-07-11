import React, { Component } from 'react';
import CreateContact from './Components/CreateContact'
import './App.css';
import axios from 'axios';
import ContactFeed from './Components/ContactFeed'

class App extends Component {
  constructor(props){
    super(props);
  }

  state = {
    contacts: []
  }

  componentDidMount() {
    axios.get('/contact')
    .then((res)=> {
      if(res.status === 200) {
        // worked
        console.log(res);
        this.setState({contacts: res.data})
      } else {
        console.log('Get Request failed');
      }
    }).catch((err) => {
      // network error
      console.log(err);
    })
  }

  AddContact = (contact) => {
    axios.post('/contact/create', {
      name: contact.name,
      phone: contact.phone,
      birthday: contact.birthday
    })
    .then((res) => {
      if (res.status === 200) {
        axios.get('/contact')
         .then((res) => {
           if (res.status === 200) {
             this.setState({contacts: res.data})
           } else{
             console.log('Get request failed.');
           }
         }).catch((err) => {
           console.log(err);
         })
      } else{
        console.log('Post request failed');
      }
    }).catch((err) =>{
      console.log(err);
    })
  }

  render() {
    return (
      <div className="App">
        <CreateContact submit = {this.AddContact}/>
        <h1> Contact List </h1>
        <ContactFeed contacts={this.state.contacts}/>
      </div>
    );
  }
}

export default App;
