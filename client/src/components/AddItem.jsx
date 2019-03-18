import React from 'react';
import $ from 'jQuery';

class AddItem extends React.Component {
	constructor(props){
	  super(props);
	  this.state = {
        currItem:'',
        currQuantity:''
	  };

	  this.handleChange = this.handleChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event){
	  //console.log(event.target);
	  const newState = {};
	  newState[event.target.id] = event.target.value;
	  //console.log(newState);
	  this.setState(newState);
	}
	handleSubmit(e){
      e.preventDefault();
      $.ajax('/groceries',{
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({
        	item: this.state.currItem,
        	quantity: this.state.currQuantity
        }),
        success: (data) => {
          this.setState({ currItem: '', currQuantity: ''});
          this.props.onSuccess();
        }
      });
	}
	render(){
	  return(
        <form onSubmit={this.handleSubmit}>
          <input id="currItem" value={this.state.currItem} onChange={this.handleChange}/>
          <input id="currQuantity" value={this.state.currQuantity} onChange={this.handleChange}/>
          <button>Add</button>	
        </form>
	  );
	}

}
export default AddItem;