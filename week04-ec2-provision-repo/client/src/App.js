import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';

class App extends Component {
    constructor() {
        super();
        this.state = {
            file: 'File name will be placed here.',
            status: 'waiting for server'
        };
    }

    queryServer = () => {
        const that = this;
        fetch('/foo')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                console.log('parsed json', json);
                that.setState(foo => (json));
            })
            .catch(function (ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
            });
    };

    createEducate = () => {
        const that = this;
        fetch('/create-educate')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                console.log('parsed json', json);

            })
            .catch(function (ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
            });
    };

    createWithAwsStandardAccount = () => {
        const that = this;
        fetch('/create-standard')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                console.log('parsed json', json);

            })
            .catch(function (ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
            });
    };

    associateElasticIp = () => {
        const that = this;
        fetch('/associate-elastic-ip')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                console.log('parsed json', json);

            })
            .catch(function (ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
            });
    };

    copyGetStarted = () => {
        const that = this;
        fetch('/script-pusher/copy-get-started')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                console.log('parsed json', json);

            })
            .catch(function (ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
            });
    };

    runGetStarted = () => {
        const that = this;
        fetch('/script-pusher/run-get-started')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                console.log('parsed json', json);

            })
            .catch(function (ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
            });
    };

    removeKnownHost = () => {
        const that = this;
        fetch('/script-pusher/remove-known-host')
            .then(function (response) {
                return response.json();
            })
            .then(function (json) {
                console.log('parsed json', json);

            })
            .catch(function (ex) {
                console.log('parsing failed, URL bad, network down, or similar', ex);
            });
    };

    render() {
        return (
            <div className="App">
                <div>

                    <h2>Welcome to EC2 Provision Repo</h2>
                </div>

                <p className="App-intro">
                    state: {this.state.status} file: {this.state.file}
                </p>
                <button onClick={this.queryServer}>Bar</button>
                <button onClick={this.createEducate}>Create with AWS Educate Account</button>
                <button onClick={this.createWithAwsStandardAccount}>Create with AWS Standard Account</button>
                <button onClick={this.associateElasticIp}>Associate Elastic Ip</button>
                <button onClick={this.copyGetStarted}>Copy the GetStarted Script</button>
                <button onClick={this.runGetStarted}>Run the GetStarted Script</button>
                <button onClick={this.removeKnownHost}>Remove From Known Host</button>

            </div>
        );
    }
}

export default App;

