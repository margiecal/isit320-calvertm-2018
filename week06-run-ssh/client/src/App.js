import React, { Component } from 'react';
import './App.css';

class App extends Component {
    callCpuInfo = () => {
        const that = this;
        fetch('/call-cpu-info')
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

  render() {
    return (
      <div className="App">
      <header>
          <p className="byline">by </p>
        <h1>Run SSH</h1>
      </header>
        <main>
            <button onClick={this.callCpuInfo}>Call Cpu Info</button>
        </main>

          <footer>
              <p>&copy; 2018 </p>
          </footer>




      </div>
    );
  }
}

export default App;
