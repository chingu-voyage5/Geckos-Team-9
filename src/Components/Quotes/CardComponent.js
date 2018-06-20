import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardSubtitle,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Row,
  Col
} from "reactstrap";

function CardComponent(props) {

    const styleCard = {
        maxHeight: "190px",
        overflow: "auto"
    }
  return (
    //   <div className="fullpage">
    //     {this.state.quotes.map(quotes => (
    //       <div className="section" key={quotes.pk}>
    //         {quotes.quote}
    //       </div>
    //     ))}
    //   </div>
    <Row>
      {props.quote.map(q => (
        <Col sm="3" key={q.pk}>
          <Card inverse >
            <CardImg
              width="100%"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97270&w=318&h=270&bg=333333&txtclr=666666"
              alt="Card image cap"
            />
            <CardImgOverlay>
              <CardText >"{q.quote}"</CardText>
              <CardText><small className="text-muted">{q.author}</small></CardText>
            </CardImgOverlay>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default CardComponent;
