import React from 'react';
import { Card, CardImage, CardBody, CardText, CardTitle, Button } from 'mdbreact';

class Card5 extends React.Component  {
  render() {
    return(
                <Card className="mb-2">
                  <CardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg" />
                  <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </CardText>
                    <Button color="secondary">Button</Button>
                  </CardBody>
                </Card>
    );
  }
};

export default Card5;