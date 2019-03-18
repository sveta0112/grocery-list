import React from 'react';
import $ from 'jQuery';
import ListItem from './ListItem.jsx';
import AddItem from './AddItem.jsx';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    	list: [
        // {item: 'banana', quantity: 3},
        // {item: 'milk', quantity: 2},
        // {item: 'apples', quantity: 5},
      ],
    }
    this.fetchGroceries = this.fetchGroceries.bind(this);
  }

  componentDidMount(){
  	//ajax should go here
  	// $.ajax('/groceries',{
  	// 	success: (list) => {
  	// 	  this.setState({list});
  	// 	}
  	// });

  	this.fetchGroceries();
  }

  fetchGroceries(){
    $.ajax('/groceries',{
  		success: (list) => {
  		  this.setState({list});
  		}
  	});
  }

  render(){
  	return(
      <div>
        <AddItem onSuccess={this.fetchGroceries}/>
        <ListItem list={this.state.list}/>
      </div>
  	);
  }
}
export default App;