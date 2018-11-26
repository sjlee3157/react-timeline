import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const eventComponents = props.events.map((event) => {
    return <TimelineEvent
            person={event.person}
            status={event.status}
            eventStamp={event.eventStamp}
            key={`${event.eventStamp}-${event.person}`}
           />
  });

  return (
    <section class="timeline">
      {eventComponents}
    </section>
  )
}

export default Timeline;
