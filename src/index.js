import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import App from './App';
import './libs/less/reset.less';

//console.log(store.getState());
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
        <Fragment>
            <Route path='/' component={App}/>
        </Fragment>
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));

