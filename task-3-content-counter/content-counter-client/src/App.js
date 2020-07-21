import React, {Component} from 'react';
import {connect} from 'react-redux'

import 'antd/dist/antd.css';


import UrlInput from './components/input/url-input' ;
import ShowContentTable from './components/show-content-table/show-content-table' ;
import {getArticleInfo} from './redux/actions'

import './app.css'


class  App extends Component  {
    render() {

        const {state, getArticleInfo} = this.props ;

        return (
            <div className="App">
                <UrlInput getArticleInfo={getArticleInfo} />
                <ShowContentTable state={state}/>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = {
    getArticleInfo
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
