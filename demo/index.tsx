import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Header from './components/Header';

import Home from './pages/Home';
import styles from './styles/main.scss';

import './styles/reset.scss';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={styles.root}>
        <div className={styles.inner}>
          <Header />
          <div className={styles.main}>
            <Sidebar />
            <div className={styles.content}>
              <Switch>
                <Route path="/" component={Home} />
                <Route path="/next-prev" component={Home} />
                <Route path="/request" component={Home} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  ); 
};

// const App = () => <div><Pagination useClassname /></div>; 

// Main APP init
ReactDOM.render(<App />, document.getElementById('app'));
