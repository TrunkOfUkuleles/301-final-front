import React from 'react';

class UpdateItemForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      item: {_id: this.props.item._id,
            name: this.props.item.name,
            description: this.props.item.description,
          }
    };
  }

  handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const item = this.state.item;
    item[field] = value;
    console.log(this.state)
    this.setState({item: item});
  }
    

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleUpdate(this.state.item)
  }

  render() {
      console.log(this.props.items)
    return (

      <form data-testid={`update-form-${this.props.item.name}`} onSubmit={(e) => this.handleSubmit(e)}>
        <input data-testid={`update-field-${this.props.item._id}`} name="notes" placeholder="Add Notes" onChange={this.handleChange} />
        <button type="submit" onClick={this.handleSubmit}>Update Item</button>
      </form>
    );
  }
}

export default UpdateItemForm;
