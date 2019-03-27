import React, { Component,Fragment} from 'react';
import {Tabbar} from './components';
import './App.less';
import routes from './routes';
import {Route,Switch,Redirect} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <Fragment>
      <div className="enjoy-body">
      <Switch>
        {
          routes.map(route=>{
            return(
              <Route key={route.path} path={route.path} component={route.component} />
            )
          })
        }
        <Redirect to='/home'/>
      </Switch>
      </div>
      <div className="enjoy-tabbar-wrapper">
        <Tabbar routes={routes.filter(route=>route.isTabbarItem)}></Tabbar>
      </div>
      </Fragment>
    );
  }
}

export default App;
