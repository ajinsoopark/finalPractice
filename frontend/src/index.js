import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import ScrollToTop from './scrollToTop';
import store from './store/index';

ReactDOM.render(<BrowserRouter>
                    <ScrollToTop>
                        <Provider >
                            <App store={ store }/>
                        </Provider>
                    </ScrollToTop>
                </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
