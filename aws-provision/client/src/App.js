import React, {Component} from 'react';
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
    }

    render() {
        return (
            <div className="App">


                <p className="App-intro">
                    state: {this.state.status} file: {this.state.file}
                </p>
                <button onClick={this.queryServer}>Bar</button>
                <button onClick={this.createEducate}>Create</button>
                <button onClick={this.createWithAwsStandardAccount}>Create With StandardAwsAccount</button>
                <button onClick={this.associateElasticIp}>Associate Elastic Ip</button>

            </div>
        );
    }
}

export default App;
