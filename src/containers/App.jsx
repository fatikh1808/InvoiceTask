import {connect} from 'react-redux';
import App from "../../src/App";
import {bindActionCreators} from "redux";
import {
    getAvatar,
    logout,
    addTerminal,
    deleteItem
} from '../actions';

const mapStateToProps = state => ({
    data: state.CustomersReducer.data,
    userAvatar: state.AuthReducer.userAvatar,
    isAuthenticated: state.AuthReducer.isAuthenticated,
    isCheating: state.AuthReducer.isCheating,
    terminalItems: state.TerminalReducer.terminalItems
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getAvatar,
    logout,
    addTerminal,
    deleteItem
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);