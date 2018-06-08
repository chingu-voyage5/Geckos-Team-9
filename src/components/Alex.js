import React from 'react'

class Alex extends React.Component {
  
  componentDidMount() {
    fetch("https://api.paperquotes.com/apiv1/qod/", {
      headers: {
        Authorization: "Token e2eeb1aa9f32eb07fa04595a0c457ecb6fadb772",
      }
    })
      .then(response => response.json())
      .then(myJson => console.log(myJson));
  }
  
  render() {
    return (
      <h1>Hello from Alex's component</h1>
    )
  }
}

export default Alex