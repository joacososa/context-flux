import { connect } from 'context-flux';
import Form from './Form';

const mapStateToProps = ({ user: { name, actions: { setName } } }) => ({
  name,
  setName,
});

export default connect(mapStateToProps, Form);
