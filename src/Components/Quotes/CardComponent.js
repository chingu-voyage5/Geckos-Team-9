import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay, 
  CardText,
  Row,
  Col
} from "reactstrap";

function CardComponent(props) {
  // src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666"
    const styleCard = {
        maxHeight: "190px",
        overflow: "auto"
    }
    
  return (
   
    <Row>
      {props.quote.map(q => (
        <Col sm="3" key={q.pk} className="p-3">
          <Card inverse >
            <CardImg
              width="100%"
              src="https://source.unsplash.com/category/nature/318x270"
              alt="Card image cap"
            />
            <CardImgOverlay >
              <CardText >"{q.quote.split('\n    \n').shift()}"</CardText>
              <CardText><small style={{color:'white'}}>~ {q.author}</small></CardText>
            </CardImgOverlay>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CardComponent;
