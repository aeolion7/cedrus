import React, { Component } from 'React';
import axios from 'axios';

export default class NewToolForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      status: 'open', // open until requested to borrow
      pictureUrl: '',
      description: '',
      features: '',
    };
    this.createFeatureArray = this.createFeatureArray.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  createFeatureArray(featureString) {
    return featureString.split(',');
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  async handleSubmit(evt) {
    try {
      evt.preventDefault();
      const newTool = { ...this.state };
      newTool.features = this.createFeatureArray(newTool.features);
      await axios.post('/api/tools', newTool);
      this.setState({
        name: '',
        status: 'open', // open until requested to borrow
        pictureUrl: '',
        description: '',
        features: '',
      });
    } catch (error) {
      console.error(error);
      alert('There was an error submitting your tool. Please try again.');
    }
  }

  render() {
    return (
      <form>
        <label htmlFor="name">Name:</label>
        <input
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />

        <label htmlFor="pictureUrl">Image URL</label>
        <input
          value={this.state.pictureUrl}
          onChange={this.handleChange}
          name="pictureUrl"
        />

        <label htmlFor="description">Description:</label>
        <input
          value={this.state.description}
          onChange={this.handleChange}
          name="description"
        />

        <label htmlFor="features">Features:</label>
        <input
          value={this.state.features}
          placeholder="Please enter features, separated by commas."
          onChange={this.handleChange}
          name="features"
        />
        <button type="submit" onClick={this.handleSubmit}>
          Submit Tool!
        </button>
      </form>
    );
  }
}
