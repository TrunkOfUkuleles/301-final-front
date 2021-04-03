import React from 'react';

import UpdateItemForm from './update-item';

class Items extends React.Component {

  render() {
console.log('items itemList: ', this.props.itemsList)
    return (
      <section>
        <h2>Items...</h2>
        {
          this.props.itemsList.map( (item) =>(
            <div key={item._id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <blockquote>{item.notes}</blockquote>
              <UpdateItemForm item={item} handleUpdate={this.props.handleUpdate} />
              <button
                data-testid={`delete-button-${item.name}`}
                onClick={ () => this.props.handleDelete(item._id) }
              >Delete Item</button>
            </div>)
          )
        }
      </section>
    );
  }
}

export default Items;
