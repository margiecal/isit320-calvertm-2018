import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ElfHeader from './ElfHeader';
import RadioLocal from './RadioLocal';
import RadioRemote from './RadioRemote';

//get rid of handleSubmit
class App extends Component {
    constructor(props) {
        super(props);


    }
    runFoo = .....



....
}

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
            //get rid of radioWeb as we refactor
            <div className="App">
                <ElfHeader />

                <main>
                    <RadioLocal/>
                    <RadioRemote/>
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
