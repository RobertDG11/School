import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import React, { Component } from "react";
import { Container, Header, Icon, List } from "semantic-ui-react";
import { connect } from "react-redux";

class ConnectedSimpleMap extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    center: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      center: props.position
    });

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const { literals } = this.props;
    return (
      <Container>
        <Header as="h2" icon textAlign="center" style={{ marginBottom: "1em" }}>
          <Icon name="map" />
          <Header.Content>{literals.map.title}</Header.Content>
        </Header>
        <Header as="h3">
          {literals.map.content}
          <br />
          <List>
            <List.Item>1. {literals.map.first}</List.Item>
            <List.Item>2. {literals.map.second}</List.Item>
            <List.Item>3. {literals.map.third}</List.Item>
          </List>
        </Header>

        <Map
          clickableIcons={true}
          containerStyle={{
            height: "70vh",
            position: "relative",
            width: "100%"
          }}
          initialCenter={{
            lat: 45.7029144,
            lng: 27.1900973
          }}
          center={this.state.center}
          zoom={16}
          google={this.props.google}
          onClick={this.onMapClicked}
        >
          <Marker
            name={"L'Atelier"}
            location={"prima"}
            personName={"Andrei D"}
            onClick={this.onMarkerClick}
            position={{ lat: 45.7032917, lng: 27.1907395 }}
            icon={{
              url:
                "http://mt.google.com/vt/icon?psize=25&font=fonts/Roboto-Bold.ttf&color=ff135C13&name=icons/spotlight/spotlight-waypoint-a.png&ax=44&ay=50&text=%E2%80%A2"
            }}
          />
          <Marker
            name={"Oldies Pub & Lounge"}
            location={"a doua"}
            personName={"Vlad G"}
            onClick={this.onMarkerClick}
            position={{ lat: 45.7011643, lng: 27.1946678 }}
            icon={{
              url:
                "http://mt.google.com/vt/icon?psize=25&font=fonts/Roboto-Bold.ttf&color=ff135C13&name=icons/spotlight/spotlight-waypoint-a.png&ax=44&ay=50&text=%E2%80%A2"
            }}
          />
          <Marker
            name={"Muzeul National de Stiinte ale Naturii"}
            location={"a treia"}
            personName={"Violeta C"}
            onClick={this.onMarkerClick}
            position={{ lat: 45.7007845, lng: 27.1894341 }}
            icon={{
              url:
                "http://mt.google.com/vt/icon?psize=25&font=fonts/Roboto-Bold.ttf&color=ff135C13&name=icons/spotlight/spotlight-waypoint-a.png&ax=44&ay=50&text=%E2%80%A2"
            }}
          />
          <Marker
            name={"Administratia Judeteana a Finantelor Publice Vrancea"}
            location={"a patra"}
            personName={"Maria I"}
            onClick={this.onMarkerClick}
            position={{ lat: 45.7042893, lng: 27.1832523 }}
            icon={{
              url:
                "http://mt.google.com/vt/icon?psize=25&font=fonts/Roboto-Bold.ttf&color=ff135C13&name=icons/spotlight/spotlight-waypoint-a.png&ax=44&ay=50&text=%E2%80%A2"
            }}
          />

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
              <h3>
                Aici este {this.state.selectedPlace.location} locatie in care a
                fost gasit log-ul CNC
              </h3>
              <h4>
                Locatia a fost descoperita de:{" "}
                {this.state.selectedPlace.personName}
              </h4>
            </div>
          </InfoWindow>
        </Map>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    literals: state.literals
  };
};

const SimpleMap = connect(mapStateToProps)(ConnectedSimpleMap);

export default GoogleApiWrapper({
  apiKey: "AIzaSyAhkSFR4jANVyM5VwM_y-KtEiPszJd5RRo"
})(SimpleMap);
