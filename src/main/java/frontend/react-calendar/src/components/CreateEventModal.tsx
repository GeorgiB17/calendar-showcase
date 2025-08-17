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
        <h2>Create Event</h2>
        <p>This is a simple modal.</p>
        <button onClick={onClose} className="close-btn">
          Close
        </button>
      </div>
    </div>
  );
}
