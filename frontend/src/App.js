import React, {Component} from 'react';
import './App.css';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import Twitter_Service_UI from './component/Twitter_Service_UI';

class App extends Component {
    render() {
        return (
            <div className="App" >
                <BrowserRouter>
                    <div>    
                        <Route exact path="/" render={() => (
                            <div>
                                <Twitter_Service_UI />
                            </div>
                        )}/>      
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;