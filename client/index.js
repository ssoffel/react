import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import ContactList from './ContactList'
import Axios from 'axios';

// const contacts = [
//   {"id": 1, "name": "R2-D2", "phone": "222-222-2222", "email": "r2d2@droids.com"},
//   {"id": 2, "name": "C-3PO", "phone": "333-333-3333", "email": "c3po@droids.com"},
//   {"id": 3, "name": "BB-8", "phone": "888-888-8888", "email": "bb8@droids.com"}
// ]

class Main extends Component {
  constructor(){
    super()
    this.state = { contacts: []}
  }

  componentDidMount = async () =>  {
    try {
      const contacts = await axios.get('/api/contacts')
      res.send(contacts, 'gekki')
    } catch (err){

    }
  }

  render () {
    return (
      <div id='main'>
        <div id='navbar'>
          <div>Contact List</div>
        </div>
        <div id='container'>
        <ContactList contacts={this.state.contacts}/>
      </div>
      </div>
    )
  }

}
ReactDOM.render(
  <Main />,
  document.getElementById('app')
)
