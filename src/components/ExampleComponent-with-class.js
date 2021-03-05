import React, { Component } from "react";
import PropTypes from "prop-types";

class ExampleClassComponent extends Component {
  // React TypeChecking with ES7
  /* static defaultProps = {
    PropertyA: PropTypes.string,
    PropertyB: PropTypes.number,
    PropertyC: PropTypes.arrayOf(PropTypes.string),
  };
  static propTypes = {
    PropertyA: "Some String",
    PropertyB: 22,
    PropertyC: [],
  }; */
  
  render() {
    const { PropertyA, PropertyB, PropertyC } = this.props;
    return (
      <div>
        <h3>I'm propertyA</h3>
        {PropertyA}
        <h3>I'm propertyB</h3>
        {PropertyB}
        <div>
          I'm the contents of propertyC
          {PropertyC.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
      </div>
    );
  }
}

// React TypeChecking with ES6
ExampleClassComponent.propTypes = {
  PropertyA: PropTypes.string,
  PropertyB: PropTypes.number,
  PropertyC: PropTypes.arrayOf(PropTypes.string),
};

ExampleClassComponent.defaultProps = {
  PropertyA: "Some String",
  PropertyB: 22,
  PropertyC: [],
};

export default ExampleClassComponent;
