// Stateful component template

import React, { Component } from 'react';
import { connect } from 'react-redux';

class HelloWorld extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>Hello, world!</div>;
  }
}

/*

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

*/

export default HelloWorld;
// export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
