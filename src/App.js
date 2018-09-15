import React, { Component } from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';
import TabController from './components/TabController';
import WatchlistController from './components/WatchlistController';
import TopGainersController from './components/TopGainersController';
import TopLosersController from './components/TopLosersController';
import SettingsController from './components/SettingsController';
import SearchController from './components/SearchController';
import './App.css';
class App extends Component {
  render() {
    return (
      <div style={{height:'100%'}}>
        <TabController>
          <WatchlistController title="Watchlist"></WatchlistController>
          <TopGainersController title="Top Gainers"></TopGainersController>
          <TopLosersController title="Top Losers"></TopLosersController>
          <SearchController title="Search"></SearchController>
          <SettingsController title="Settings"></SettingsController>
        </TabController>
      </div>
    );
  }


}

export default App;
