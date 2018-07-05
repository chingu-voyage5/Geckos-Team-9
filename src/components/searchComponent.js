import React, { Component } from 'react';

//listen to the searchTerm and pass
//it to the parent component

//search stores the
  // search term in App.js like
  // this.state.searchTerm

// when the user clicks
 // the search
 // button, it sets state.searchTerm

// when two (or more) components
// share the same state, it lives in the
 // parent component and then it gets
  // passed down to the children.= 'lifting
  // state up"

class Search extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick (e){
    e.preventDefault();
    e.target.value !== ''
    ?
    this.props.searchThis(searchTerm)
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
    //  onChange={}
    />
    <button
      type='button'
      onClick={this.handleClick()}>
      Search
    </button>


    <br/>


    </div>
  )}
}


export default Search;
