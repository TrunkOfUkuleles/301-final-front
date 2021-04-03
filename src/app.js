import React from 'react';

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Items from './components/items.js';
import AddNewItem from './components/add-item';


require('dotenv').config();
const API_SERVER = process.env.REACT_APP_API;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  addItem = async (item) => {
    await axios.post(`${API_SERVER}/items`, {params: {item}});
    this.getItems();
  }

  deleteItem = async (id) => {
    await axios.delete(`${API_SERVER}/items/${id}`);
    this.getItems();
  }

  updateItem = async (item) => {
    await axios.put(`${API_SERVER}/items/${item.id}`, {params: {item}});
    this.getItems();
  }

  getItems = async () => {
    const response = await axios.get(`${API_SERVER}/items`);
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
