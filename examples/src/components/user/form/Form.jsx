import React from 'react';
import { PropTypes } from 'prop-types';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.setName(this.state.name);
  }

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col">If this is not your real name, please modify it below.</div>
        </div>
        <div className="row">
          <div className="col">
            <form className="form-inline" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.handleChange} />
              </div>
              <button type="submit" className="btn btn-primary mb-2">Save</button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

UserForm.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
};

export default UserForm;
