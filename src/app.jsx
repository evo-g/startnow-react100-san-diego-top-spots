import React, { Component } from 'react';
import axios from 'axios';
import TopSpot from './topspot';

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
        topspots: []
      };
  }
  componentWillMount() {
    axios.get('https://origin-top-spots-api.herokuapp.com/api/topspots')
    .then(response => response.data)
    .then(topspots => this.setState({ topspots }));
  }

  

  render() {
    return (
      <div className='App'>
        <div className='container text-center text-white '>
          <div className='jumbotron jumbotron-fluid rounded mb-2 bg-info'>
            <h2 className='bold'>San Diego Top Spots</h2>
            <p className='lead'>A list of the top 30 places to see in San Diego, California </p>
          </div>
          <div className='col-md-12'>
            {
              this.state.topspots.map(topspot => (
              <TopSpot
                key={topspot.id}
                name={topspot.name}
                description={topspot.description}
                location={topspot.location} 
              />
              ))
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
