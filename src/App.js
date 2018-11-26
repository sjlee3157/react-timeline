import React, { Component } from 'react';
import TimelineEvent from './components/TimelineEvent';
import Timeline from './components/Timeline';

import timelineData from './data/timeline.json';
import './App.css';

// const eventsData = [
//   {
//     person: 'Friekta',
//     status: 'sad :(',
//     eventStamp: new Date("26 Nov 2018 14:28"),
//   },
//   {
//     person: 'Muzzy',
//     status: "aeiou je t'aime <3",
//     eventStamp: new Date("2018-11-26T14:25:01"),
//   }
// ];

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
          <Timeline
            events={timelineData.events}
          />
        </main>
      </div>
    );
  }
}

export default App;
