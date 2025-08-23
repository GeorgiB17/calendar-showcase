import "../css/app.css";

type CreateEventModalProps = {
  onClose: () => void;
};

export default function CreateEventModal({
  onClose,
}: Readonly<CreateEventModalProps>) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Create an Event</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            marginBottom: "20px",
          }}
        >
          <label htmlFor="event-title">Event Title:</label>
          <input type="text" id="event-title" name="event-title" />
          <label htmlFor="event-date">Event Date:</label>
          <input type="date" id="event-date" name="event-date" />
          <label htmlFor="event-time">Event Time:</label>
          <input type="time" id="event-time" name="event-time" />
          <label htmlFor="event-description">Event Description:</label>
          <textarea id="event-description" name="event-description" rows={4} />
        </div>

        <div style={{ display: "flex", gap: "10px", justifyContent: "right" }}>
          <button
            onClick={onClose}
            className="close-btn rounded-pill shadow-sm"
          >
            Close
          </button>
          <button
            type="submit"
            className="modal-btn rounded-pill px-4 shadow-sm"
            id="modal-btn-submit"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
