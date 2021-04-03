import React from 'react';
import './app.css'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import Items from './components/items.js';
import AddNewItem from './components/add-item';


// require('dotenv').config();
const API_SERVER = process.env.REACT_APP_API;

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  addItem = async (item) => {
    console.log('add item: ' , item)
    await axios.post(`${API_SERVER}/items`, item);
    this.getItems()
    
  }

  deleteItem = async (id) => {
    await axios.delete(`${API_SERVER}/items/${id}`);
    this.getItems()
    
  }
 
  updateItem = async (item) => {
    console.log(item)
    await axios.put(`${API_SERVER}/items/${item._id}`, item);
    this.getItems()
    
  }

  getItems = async () => {
    const response = await axios.get(`${API_SERVER}/items`);
    const items = response.data;
    console.log("get item log: ", items)
    this.setState({items});
  }

  async componentDidMount() {
    await this.getItems()
  }

  render() {
    
    return (
      <div className="bounding-box" >
        <div className="center-me"  >
        <AddNewItem handleAddItem={this.addItem} />
      </div>
        <h1>Our Items</h1>
        <Form/>
        <hr />
        <Items handleDelete={this.deleteItem} handleUpdate={this.updateItem} itemsList={this.state.items} className="center-me"/>
        <hr />
        
      </div>

    );
  }
}

export default App;
