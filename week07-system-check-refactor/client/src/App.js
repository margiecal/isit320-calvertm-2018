import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ElfHeader from './ElfHeader';

class App extends Component {

    copyFile = () => {
        const that = this;
        fetch('/script-pusher/copy-file')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json);

            })
            .catch(function(ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
            });
    };

    render() {
        return (
            <div className="App">
                <ElfHeader />

                <main>
                    <button onClick={this.copyFile}>Copy File</button>

                </main>
                <footer>
                    <p>&copy; by Charlie Calvert </p>
                </footer>
            </div>
        );
    }
}

export default App;
