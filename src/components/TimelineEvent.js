import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  console.log(props);
  return (
    <section class="timeline-event">
      <h3 class="event-person">{props.person}</h3>
      <p class="event-status">{props.status}</p>
      <p class="event-time"><Timestamp
          time={props.eventStamp}
         />
      </p>
    </section>
  );
}

export default TimelineEvent;
