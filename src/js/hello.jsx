import React from 'react';
import ReactDOM from 'react-dom';

import Buy from './components/buy.jsx';

class Hello extends React.Component {
  render(){
    return (
      <React.Fragment>
        <div className="hello-panel">
          <h1>Привет, React!</h1>
        </div>
        <Buy></Buy>
      </React.Fragment>
    )
  }
}

ReactDOM.render(<Hello/>, document.getElementById('Hello'));