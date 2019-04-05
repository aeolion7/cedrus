import 'babel-polyfill';
import React, { Component } from 'react';
import axios from 'axios';
import NewToolForm from './NewToolForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tools: [],
    };
    this.listFeatures = this.listFeatures.bind(this);
  }

  async componentDidMount() {
    try {
      const { data } = await axios.get('/api/tools');
      this.setState({ tools: data });
    } catch (error) {
      console.error(error);
      alert('There was an error. Please try again.');
    }
  }

  listFeatures(featureArray) {
    let featureString = '';
    featureArray.forEach(feature => {
      featureString += feature + ', ';
    });
    return featureString.substr(0, featureString.length - 2);
  }

  render() {
    return (
      <div id="app">
        <h1>ShareShed</h1>
        <h3>Current Tools:</h3>
        <div id="tools">
          {this.state.tools &&
            this.state.tools.map((tool, i) => {
              return (
                <div className="single-tool" key={i}>
                  <img src={tool.pictureUrl} />
                  <h3>{tool.name}</h3>
                  <p>Status: Currently {tool.status}</p>
                  <p>{tool.description}</p>
                  <p>Features: {this.listFeatures(tool.features)}</p>
                  {tool.status === 'shared' && (
                    <p>Currently on loan for {tool.loanDuration} days</p>
                  )}
                </div>
              );
            })}
        </div>
        <NewToolForm />
      </div>
    );
  }
}

export default App;
