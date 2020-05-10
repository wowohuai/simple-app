import React, { Fragment, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { Header} from './common'
import store from './store'
import Loading from '@/common/loading'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Fragment>
          <Router>
            <Header/>
            <Switch>
              <Suspense fallback={<Loading />}>
                <Route exact path='/' component = {React.lazy(() => import('@/pages/home'))} />
                <Route exact path='/detail' component={React.lazy(() => import('@/pages/detail'))} />
              </Suspense>
            </Switch>
          </Router>
        </Fragment>
      </Provider>
    </div>
  );
}

export default App;
