import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>LoginPage1</div>;
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators({}, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
