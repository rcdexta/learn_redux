import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter'
import store from './store'
import {Provider} from 'react-redux'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h2>Learn React-Redux</h2>
                    </div>
                    <div className="App-intro">
                        <Counter/>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
