import React, { Component } from "react";
import { Form, Button, FormGroup, Input } from "reactstrap";

class Search extends Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
  }

  submit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <Form inline onSubmit={this.submit}>
        <FormGroup>
          <Input
            className="mr-sm-2"
            type="text"
            placeholder="Write a word"
            value={this.props.searchTerm}
            onChange={this.props.onSearchThis}
          />

          <Button
            className="btn btn-outline-primary "
            type="button"
            onClick={this.props.onSearch}>
            Search
          </Button>
        </FormGroup>
      </Form>
    );
  }
}

export default Search;
