import React from "react";
import PropTypes from "prop-types";

const TestWithCustomStyles = ({ propertyA }) => (
  <>
    <h3>I'm a random component</h3>
    <h4>Which will receive some custom styles</h4>
    {propertyA}
  </>
);
TestWithCustomStyles.propTypes = {
  /**
   * Random Property
   */
  propertyA: PropTypes.string,
};

TestWithCustomStyles.defaultProps= {
    propertyA:'Some random value'
}
export default TestWithCustomStyles;
