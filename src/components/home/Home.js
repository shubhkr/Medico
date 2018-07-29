import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import {Carousel} from 'antd';

const Home = () => (
    <div>
      <Jumbotron>
        <Carousel autoplay>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
        <hr className="my-2" />
        <p>
          Need to add proper text over here.
        </p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
);

export default Home;
