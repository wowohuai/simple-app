import React from 'react';
import { Header} from './common'
import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header/>
      </Provider>
    </div>
  );
}

export default App;
