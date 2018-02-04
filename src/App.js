import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';
import Auth from './Auth';
import Private from './Private';
import Public from './Public';
import Home from './Home';
import {addListener, removeListener, isAuthorized} from './AuthorizeApi';
import './App.css';


class App extends Component {
  state = {
    isAuthorized
  };

  componentDidMount() {
    addListener(this.handleAuthorize);
  }

  componentWillUnmount() {
    removeListener(this.handleAuthorize);
  }

  handleAuthorize = isAuthorized => {
    this.setState({isAuthorized});
  };

  render() {
    //className='App'
    const {isAuthorized} = this.state;
    return(
      <div>
        <nav>
          <ul>
            <li><Link to='/auth'>Войти</Link></li>
            <li><Link to='/private'>Секретная страница</Link></li>
            <li><Link to='/public'>Публичная страница</Link></li>
            <li><Link to='/'>Главная</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/auth' component={Auth} />
          {isAuthorized&&<Route path='/private' render={() => isAuthorized ? <Private /> : <Redirect to='/auth' />} />}
          <Route path='/public' component={Public} />
          {!isAuthorized&&<Route path='/*' render={(path) => path.match.url === '/private' ?  <Redirect to='/auth' /> : <Home />} />}
        </Switch>
      </div>
    );
  }
}

export default App;
