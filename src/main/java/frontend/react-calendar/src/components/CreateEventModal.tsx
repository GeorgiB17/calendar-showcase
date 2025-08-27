import { useState } from "react";
import "../css/app.css";
import LoadingModal from "./LoadingModal";
import ErrorModal from "./ErrorModal";
import SuccessModal from "./SuccessModal";

type CreateEventModalProps = {
  onClose: () => void;
};

export default function CreateEventModal({
  onClose,
}: Readonly<CreateEventModalProps>) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [duration, setDuration] = useState("60");
  const [description, setDescription] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const newEvent = {
      creatorID: 1,
      title,
      time: `${date}T${time}:00`,
      duration,
      description,
      participants: [],
      location: "Sofia",
    };
    try {
      const response = await fetch("http://localhost:5003/api/events/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to create event");
      }
      console.log("Event submitted:", newEvent);
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="modal-overlay">
        <div className="modal-content">
          <h2 className="text-xl font-semibold mb-4">Create an Event</h2>

          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              marginBottom: "20px",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="event-title">Event Title:</label>
              <input
                type="text"
                id="event-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="event-date">Event Date:</label>
              <input
                type="date"
                id="event-date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <label htmlFor="start-time">Event Time:</label>
              <div style={{ display: "flex", gap: "10px" }}>
                <input
                  type="time"
                  id="start-time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                >
                  <option value="30">30 min</option>
                  <option value="60">1 hour</option>
                  <option value="90">1 hour 30 min</option>
                  <option value="120">2 hours</option>
                  <option value="150">2 hours 30 min</option>
                  <option value="180">3 hours</option>
                </select>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <label htmlFor="event-description">Event Description:</label>
              <textarea
                id="event-description"
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            <div
              style={{
                display: "flex",
                gap: "10px",
                justifyContent: "flex-end",
              }}
            >
              <button
                type="button"
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
          </form>
        </div>
      </div>
      {isLoading && <LoadingModal />}
      {isSuccess && (
        <SuccessModal onClose={onClose} text="Event created successfully!" />
      )}
      {isError && (
        <ErrorModal
          onClose={onClose}
          text="An error occurred while creating the event. Please try again."
        />
      )}
    </>
  );
}
