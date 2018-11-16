import React, { Component } from 'react';
import './App.css';

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
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

    render() {
        return (
            <div className="App">
                <header>
                    <h1>Run CPU Info </h1>
                </header>

                <main>
                    <button onClick={this.copyFile}>RunCpuInfo</button>
                </main>
                <footer>
                    <p>&copy; by Margie Calvert </p>
                </footer>
            </div>
        );
    }
}

export default App;
