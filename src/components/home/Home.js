import React from 'react';
import { Jumbotron, Button } from 'Reactstrap';
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
          It uses utility classes for typgraphy and spacing to space content out within the larger
          container.
        </p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
);

export default Home;
