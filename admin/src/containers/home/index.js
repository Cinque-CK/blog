import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch, Link } from 'react-router-dom';

import User from './user';
import Article from './article';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { match } = this.props;
        console.log(match)
        return (
            <div>
                <ul>
                    <li>
                        <Link to={`${match.url}/user`}>User</Link>
                    </li>
                    <li>
                        <Link to={`${match.url}/Article`}>Article</Link>
                    </li>
                </ul>
                <Route path={`${match.url}/user`} component={User} />
                <Route path={`${match.url}/article`} component={Article} />
            </div>
        );
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
