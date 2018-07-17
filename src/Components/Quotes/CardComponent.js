import React from "react";
import { Card, CardImg, CardImgOverlay, CardText, Row, Col } from "reactstrap";

// <Row>
//   {props.quote.map(q => (
//     // <Col sm="3" key={q.pk} className="p-3">
//     //   <Card inverse >
//     //     <CardImg
//     //       width="100%"
//     //       src={q.small}
//     //       alt="Card image cap"
//     //     />
//     //     <CardImgOverlay >
//     //       <CardText >"{q.quote.split('\n    \n').shift()}"</CardText>
//     //       <CardText><small style={{color:'white'}}>~ {q.author}</small></CardText>
//     //     </CardImgOverlay>
//     //   </Card>
//     // </Col>
//   ))}
// </Row>
function CardComponent(props) {
  // src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666"
  const styleCard = {
    maxHeight: "190px",
    overflow: "auto"
  };

  return (
    <div className="card-columns">
      {props.quote.map(q => (
        <div>
          <div key={q.pk} className="card ">
            <img
              className="card-img border-0"
              src={q.small}
              alt="Card image"
            />
          </div>
          <div className="card p-3 text-right shadow p-3 mb-5 bg-white rounded">
            <blockquote className="blockquote mb-0">
              <p>
              "{q.quote.split('\n    \n').shift()}"
              </p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  <cite title="Source Title"> {q.author}</cite>
                </small>
              </footer>
            </blockquote>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardComponent;
