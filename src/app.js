import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';

require('./main.scss');
import { Header } from './modules/Header';
import { Footer } from './modules/Footer';

class App extends React.Component {
  render() {
    return(
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

render (
  <App />,
  document.getElementById('root')
);
