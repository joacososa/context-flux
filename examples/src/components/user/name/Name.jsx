import React from 'react';
import { PropTypes } from 'prop-types';

class Name extends React.Component {
  render() {
    console.log('Rendering Name component');
    return (
      <div className="row">
        <div className="col">
          Name: { this.props.name }
        </div>
      </div>
    );
  }
}

Name.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Name;
