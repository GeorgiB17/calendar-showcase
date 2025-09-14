import type { Event } from "./Types";
import "../css/app.css";

type EventProps = {
  event: Event;
};

function EventBlock({ event }: Readonly<EventProps>) {
  return (
    <div style={{}} className="event-card">
      <h3>{event.title}</h3>
      <p>{new Date(event.time).toLocaleString()}</p>
      <p>Duration: {event.duration} minutes</p>
      <p>{event.description}</p>
      <p>Location: {event.location}</p>
    </div>
  );
}

export default EventBlock;
