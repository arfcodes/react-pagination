import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Header from './components/Header';

import Home from './pages/Home';
import NextPrev from './pages/NextPrev';
import NextPrevInfo from './pages/NextPrevInfo';
import CustomIcon from './pages/CustomIcon';
import CustomStyles from './pages/CustomStyles';
import Test from './pages/Test';
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
                <Route path="/" component={Home} exact />
                <Route path="/custom-icon" component={CustomIcon} />
                <Route path="/custom-styles" component={CustomStyles} />
                <Route path="/next-prev" component={NextPrev} />
                <Route path="/next-prev-info" component={NextPrevInfo} />
                <Route path="/request" component={Home} />
                <Route path="/test" component={Test} />
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
