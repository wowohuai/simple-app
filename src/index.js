import React , { Fragment, StrictMode} from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import { GlobalStyle } from './style'
import { IconfontStyle } from './static/iconfont/iconfont'
import App from './App';

ReactDOM.render(
  <Fragment>
    <GlobalStyle />
    <IconfontStyle />
    <App />
  </Fragment>,
  document.getElementById('root')
);
