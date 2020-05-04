import React, { Fragment } from 'react';
import { Header} from './common'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Fragment>
          <Header/>
          <Router>
            <Switch>
                <Route exact path='/' render={() => (<div>home</div>)} />
                <Route exact path='/detail' render={() => (<div>detail</div>)} />
            </Switch>
          </Router>
        </Fragment>
      </Provider>
    </div>
  );
}

export default App;
