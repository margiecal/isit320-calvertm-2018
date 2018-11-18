import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allData: 'unknown'
        };
    }
    callCpuInfo = () => {
        const that = this;
        fetch('/ssh-runner/call-cpu-info')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('parsed json', json.allData);
                that.setState({ allData: json.allData });
            })
            .catch(function(ex) {
                console.log(
                    'parsing failed, URL bad, network down, or similar',
                    ex
                );
            });
    };

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
                    <h1>Week6 SystemCheck </h1>
                </header>

                <main>
                    <button onClick={this.copyFile}>Copy File</button>
                    <button onClick={this.callCpuInfo}>Run CPU Info</button>
                    <p>{this.state.allData}</p>
                </main>
                <footer>
                    <p>&copy; by Margie Calvert </p>
                </footer>
            </div>
        );
    }
}

export default App;
