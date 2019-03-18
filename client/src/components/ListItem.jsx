import React from 'react';

//props is object, with key list = [{},...], list is <ListItem list={[{},...]}/>
var ListItem = (props) => (
  <div className="groceries">
    { props.list.map(grocery =>(
      <div key={grocery.id}>
        <span>{ grocery.item }</span>
        <span>{ grocery.quantity }</span>
      </div>
    ))}
  </div>
);

export default ListItem;