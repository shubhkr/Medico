import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Jumbotron, Button } from 'reactstrap';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 27.4922,
      lng: 95.3468
    },
    zoom: 11
  };

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Contact me!</h1>
          <p className="lead">
            Need layout and content for this screen. Have temporarily added a
            sample map for now but need info regarding its layout and positioning
            as well.
          </p>
          <p className="lead">
            <Button color="primary">Let's connect</Button>
          </p>
          <div id="map">
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyAvfC4M1b_s7z55YvTBnPJu9mHQg4NMR5w' }}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={27.4922}
                lng={95.3468}
                text={'Tinsukia'}
              />
            </GoogleMapReact>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default SimpleMap;