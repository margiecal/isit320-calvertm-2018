import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class RadioLocal extends Component {

    constructor(props) {
        super(props);
        this.dataEndPoints = ....


    }

    //just the local radio buttons and handleChange, handlesubmit
    //handleRadioChange, useRadioButtonSelection
    //get rid of ssh runner
    //no elfheader
    //get rid of all radio remote code
    handleChange = event => {
        const selectedValue = event.target.value;
        const endPointIndex = event.target.getAttribute('data-endpoint')
    };
    this
.
    setState
....
}


    render() {
        return (

            //radioWeb
            <div className="App">


                <main>
                    <section>{radioWeb}</section>
                    <button onClick={this.copyFile}>Copy File</button>

                </main>
                <footer>
                    <p>&copy; by Charlie Calvert </p>
                </footer>
            </div>
        );
    }
}

export default RadioLocal;
