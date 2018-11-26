import React, { Component } from 'react';
import TimelineEvent from './components/TimelineEvent';
import Timeline from './components/Timeline';

import timelineData from './data/timeline.json';
import './App.css';

class App extends Component {
  render() {
    console.log(timelineData);

    // Customize the code below
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Application title</h1>
        </header>
        <main className="App-main">
        <TimelineEvent
          person="Friekta"
          status="sad :("
          eventStamp={new Date("26 Nov 2018 14:28")}
          key="Friekta1"
        />
        <TimelineEvent
          person="Muzzy"
          status="aeiou je t'aime <3"
          eventStamp="2018-11-26T14:25:01"
          key="Muzzy1"
        />
        </main>
      </div>
    );
  }
}

export default App;
