import { connect } from 'context-flux';
import Age from './Age';

const mapStateToProps = ({ user: { age } }) => ({
  age,
});

export default connect(mapStateToProps, Age);
