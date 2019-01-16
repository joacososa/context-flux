import React from 'react';
import { PropTypes } from 'prop-types';

class Age extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          Age: {this.props.age}
        </div>
      </div>
    );
  }
}

Age.propTypes = {
  age: PropTypes.number.isRequired,
};

export default Age;
