import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';
// import PropTypes from 'prop-types';

const Timeline = (props) => {
  const eventComponents = props.events.map((event) => {
    return <TimelineEvent
            person={event.person}
            status={event.status}
            timeStamp={event.timeStamp}
            key={`${event.timeStamp}-${event.person}`}
           />
  });

  return (
    <section className="timeline">
      {eventComponents}
    </section>
  )
}

// Timeline.propTypes = {
//   events: PropTypes.array,
// };

export default Timeline;
