import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch, Link, Redirect } from 'react-router-dom';

import Header from '../../components/common/header'
import User from './user';
import Article from './article';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { match } = this.props;
        return (
            <div>
                <Header />
                <div className="body">
                    <div>
                        
                    </div>
                    <div>

                    </div>
                </div>
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
