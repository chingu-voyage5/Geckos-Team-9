import React, { Component } from 'react';

class Search extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
}


//Not sure if the click event will be here.

  handleClick (e){
    e.preventDefault();
    this.props.searchTerm !== ''
    ?
    alert('Searching for' +  ' ' + this.props.searchTerm)
    :
    null
  }

  render(

  ) {

  return(
    <div>

    <input
     type='text'
     placeholder='Insert a keyword'
     value={this.props.searchTerm}
     onChange={this.props.searchThis}
    />
    <button
      type='button'
      onClick={this.handleClick}>
      Search
    </button>


    <br/>


    </div>
  )}
}


export default Search;
