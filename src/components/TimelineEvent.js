import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';
// import PropTypes from 'prop-types';

const TimelineEvent = (props) => {
  console.log(props);
  return (
    <section className="timeline-event">
      <h3 className="event-person">{props.person}</h3>
      <p className="event-status">{props.status}</p>
      <p className="event-time">
        <Timestamp
          time={props.timeStamp}
        />
      </p>
    </section>
  );
}

// TimelineEvent.propTypes = {
//   person: PropTypes.string,
//   status: PropTypes.string,
//   timeStamp: PropTypes.string,
// };

export default TimelineEvent;
