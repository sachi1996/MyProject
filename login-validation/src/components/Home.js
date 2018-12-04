import React, { Component } from "react";
import { Carousel, CarouselInner, CarouselItem, Container, Row, Col, Card, CardImage, CardBody, CardTitle, CardText, CarouselCaption, View, Mask } from "mdbreact";

import '../CSS/Home.css';
import Reg from './Register.js';

import Card1 from './Cards/Card1.js';
import Card2 from './Cards/Card2.js';
import Card3 from './Cards/Card3.js';
import Card4 from './Cards/Card4.js';
import Card5 from './Cards/Card5.js';
import Card6 from './Cards/Card6.js';
import Card7 from './Cards/Card7.js';
import Card8 from './Cards/Card8.js';
import Card9 from './Cards/Card9.js';


class Home extends Component {
  render() {
    return (
        <div className="body">
      <Container>
        <Carousel activeItem={1} length={3} slide={true} showControls={false} showIndicators={false} multiItem>
        <br/>
          <CarouselInner>
              <Row>
              <CarouselItem itemId="1">
              <Row md="6">
                <Col md="4" className="clearfix d-none d-md-block">
                    <Card1 />
                </Col>
                <Col md="4" className="clearfix d-none d-md-block">
                    <Card2 />
                </Col>
                <Col md="4" className="clearfix d-none d-md-block">
                     <Card3 />
                </Col>
                </Row>
                <br/><br/>
              </CarouselItem>
              <CarouselItem itemId="2">
                <Row md="6">
                <Col md="4" className="clearfix d-none d-md-block">
                    <Card4 />
                </Col>
                <Col md="4" className="clearfix d-none d-md-block">
                     <Card5 />
                </Col>
                <Col md="4" className="clearfix d-none d-md-block">
                     <Card6 />
                </Col>
                </Row>
                <br/><br/>
              </CarouselItem>
              <CarouselItem itemId="3">
                <Row>
                <Col md="4" className="clearfix d-none d-md-block">
                    <Card7 />
                </Col>
                <Col md="4" className="clearfix d-none d-md-block">
                    <Card8 />
                </Col>
                <Col md="4" className="clearfix d-none d-md-block">
                    <Card9 />
                </Col>
                </Row>
                <br/><br/>
              </CarouselItem>
            </Row>
          </CarouselInner>
        </Carousel>
      </Container>

      <Row md="6">
          <Container>
                    <Carousel activeItem={1} length={4} showControls={true} showIndicators={true} className="z-depth-1">
                <CarouselInner>
                <CarouselItem itemId="1">
                    <View>
                    <img className="d-block w-100" src="https://www.mrt.ac.lk/web/sites/default/files/Faculty/Archi/slideshow/slide.jpg" alt="First slide" />
                    <Mask overlay="black-light" />
                    </View>
                    <CarouselCaption>
                    <h3 className="h3-responsive">mask 1</h3>
                    <p>First text</p>
                    </CarouselCaption>
                </CarouselItem>
                <CarouselItem itemId="2">
                    <View>
                    <img className="d-block w-100" src="https://www.99xtechnology.com/wp-content/themes/99xtechnology/images/home/cover.jpg" alt="Second slide" />
                    <Mask overlay="black-strong" />
                    </View>
                    <CarouselCaption>
                    <h3 className="h3-responsive">mask 2</h3>
                    <p>Second text</p>
                    </CarouselCaption>
                </CarouselItem>
                <CarouselItem itemId="3">
                    <View>
                    <img className="d-block w-100" src="http://egreen.io/images/wso2.jpg" alt="Third slide" />
                    <Mask overlay="black-slight" />
                    </View>
                    <CarouselCaption>
                    <h3 className="h3-responsive">mask 3</h3>
                    <p>Third text</p>
                    </CarouselCaption>
                </CarouselItem>
                <CarouselItem itemId="4">
                    <View>
                    <img className="d-block w-100" src="https://dailysports.lk/wp-content/uploads/2016/03/2-6.jpg" alt="Mattonit's item" />
                    <Mask overlay="black-light" />
                    </View>
                    <CarouselCaption>
                    <h3 className="h3-responsive">mask 4</h3>
                    <p>Taken june 21th by @mattonit</p>
                    </CarouselCaption>
                </CarouselItem>
                </CarouselInner>
            </Carousel>
          </Container>
      </Row>
      <br/>
      <br/>
      <br/>
      <hr/>
      <Row md="6">
          <Col md="4">
                <br/>
                <Card className="mb-2" style={{height: '400px'}}>
                  <CardImage align="center" className="img-fluid" src="http://blog.qontak.com/wp-content/uploads/2017/01/Developing-Customer-Loyalty.jpg" />
                  <CardBody>
                    <CardTitle>Customer Care</CardTitle>
                    <CardText>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                      <br/>
                      Find out what we can find you !
                    </CardText>
                  </CardBody>
                </Card>
          </Col>

          <Col md="8" text="center">
              <Reg />
          </Col>
      </Row>

      </div>
      );
    }
  }

export default Home;