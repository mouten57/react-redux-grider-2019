import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends Component {
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position =>
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        }),
      err => this.setState({ errorMessage: err.message }),
      { timeout: 15000 }
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.late) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Gathering weather data..." />;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
