import React, { Component } from 'react';
import './App.css';
import ElfHeader from './ElfHeader';
import Local from './Local';
import Remote from './Remote';

class App extends Component {
    constructor(props) {
        super(props);
        this.dataEndPoints = [
            '/script-pusher' + '/run-script?script=',
            '/script-pusher/run-system-tool?script='
        ];
        this.state = {
            allData: '',
            selectedValue: '',
            endPointIndex: 0
        };
    }

    render() {
        return (
            <div className="App">
                <ElfHeader />
                <Local />
                <Remote />
            </div>
        );
    }
}

export default App;
