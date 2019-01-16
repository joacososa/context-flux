import React from 'react';
import shallowCompare from './shallowCompare';

class WrapperComponent extends React.Component {
    shouldComponentUpdate(nextProps) {
      const { context, mapStateToProps } = this.props;
      return shallowCompare(mapStateToProps(context), mapStateToProps(nextProps.context));
    }
    render() {
      return (
        <React.Fragment>
          { this.props.children }
        </React.Fragment>
      );
    }
}

export default WrapperComponent;

