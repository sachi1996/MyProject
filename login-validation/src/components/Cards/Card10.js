import React from 'react';
import { Card, CardImage, CardBody, CardText, CardTitle } from 'mdbreact';

class Card10 extends React.Component  {
  render() {
    return(
                <Card className="mb-2" style={{height: '435px', width: '400px'}}>
                  <CardImage className="img-fluid" src="https://www.ducttapemarketing.com/wp-content/uploads/2016/11/photo-1444201716572-c60ec66d0494.jpg" />
                  <CardBody>
                    <CardTitle style={{textAlign: 'center'}}>Login here</CardTitle>
                    <CardText>
                      <p style={{textAlign: 'center'}}>Some quick example text to build on the card title and</p>
                      <p style={{textAlign: 'center'}}>Some quick example text to build title and</p>
                      <p style={{textAlign: 'center'}}>Not yet member? <a href="Register">Register here</a></p>
                    </CardText>
                  </CardBody>
                </Card>
    );
  }
};

export default Card10;
