import React from 'react';

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Items from './components/items.js';
import AddNewItem from './components/add-item';


// require('dotenv').config();
// const API_SERVER = process.env.REACT_APP_API;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  addItem = async (item) => {
    await axios.post(`http://localhost:3001/items`, {params: {item}});
    this.getItems.then(rez => this.setState({rez}));
    
  }

  deleteItem = async (id) => {
    await axios.delete(`http://localhost:3001/items/${id}`);
    this.getItems().then(rez => this.setState({rez}));
    
  }
 
  updateItem = async (item) => {
    await axios.put(`http://localhost:3001/items/${item.id}`, {params: {item}});
    this.getItems().then(rez => this.setState({rez}));
    
  }

  getItems = async () => {
    const response = await axios.get(`http://localhost:3001/items`);
    const items = response.data;
    this.setState({items});
  }

  async componentDidMount() {
    console.log('state: ', this.state)
    await this.getItems();
  }

  render() {
    
    return (
      <div className='bounding-box' display="grid" justify-self="center">
        <h1>Our Items</h1>
        <Form handleAddItem={this.addItem} />
        <hr />
        <Items handleDelete={this.deleteItem} handleUpdate={this.updateItem} itemsList={this.state.items} />
        <hr />
        <AddNewItem handleAddItem={this.addItem}itemsList={this.state.items} />
      </div>

    );
  }
}

export default App;
