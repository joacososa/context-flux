import React from "react";
import { PropTypes } from "prop-types";
import { shallowCompare } from "../utils";

class ContextWrapper extends React.Component {
  static propTypes = {
    context: PropTypes.object.isRequired,
    mapStateToProps: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
  };
  shouldComponentUpdate(nextProps) {
    const { context, mapStateToProps, regularProps } = this.props;

    return (
      shallowCompare(
        mapStateToProps(context),
        mapStateToProps(nextProps.context)
      ) || shallowCompare(regularProps, nextProps.regularProps)
    );
  }

  render() {
    return <React.Fragment>{this.props.children}</React.Fragment>;
  }
}

export default ContextWrapper;
