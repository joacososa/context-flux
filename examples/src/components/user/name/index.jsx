import { connect } from 'context-flux';
import Name from './Name';

const mapStateToProps = ({ user: { name } }) => ({
  name,
});

export default connect(mapStateToProps, Name);
