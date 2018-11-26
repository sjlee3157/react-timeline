import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  console.log(props);
  return (
    <section>
      <h3>{props.person}</h3>
      <p>{props.status}</p>
      <p><Timestamp
          time={props.eventStamp}
         />
      </p>
    </section>
  );
}

export default TimelineEvent;
