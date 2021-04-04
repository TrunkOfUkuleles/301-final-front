import React from 'react';
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import UpdateItemForm from './update-item';

class Items extends React.Component {

  render() {
console.log('items itemList: ', this.props.itemsList)
    return (
      <section>
        <h2>Some Things in stock</h2>
        {
          this.props.itemsList.map( (item) =>(
            <Card key={item._id} className="center-me">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <blockquote>{item.notes}</blockquote>
              <UpdateItemForm item={item} handleUpdate={this.props.handleUpdate} className="center-me" />
              <button
                data-testid={`delete-button-${item.name}`}
                onClick={ () => this.props.handleDelete(item._id) }
              >Delete Item</button>
            </Card>)
          )
        }
      </section>
    );
  }
}

export default Items;
