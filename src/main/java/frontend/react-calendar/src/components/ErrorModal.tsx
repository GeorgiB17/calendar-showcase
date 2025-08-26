import "../css/app.css";

type ErrorModalProps = {
  text: string;
  onClose: () => void;
};

function ErrorModal({
  text = "Something went wrong!",
  onClose,
}: Readonly<ErrorModalProps>) {
  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ textAlign: "center" }}>
        <h2>{text}</h2>
        <div
          style={{
            fontSize: "3rem",
            color: "red",
            marginBottom: "1rem",
          }}
        >
          ❌
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={onClose}
            className="modal-btn rounded-pill px-4 shadow-sm"
            id="modal-btn-submit"
            style={{ marginTop: "20px", backgroundColor: "blue" }}
          >
            💀🥀
          </button>
        </div>
      </div>
    </div>
  );
}
export default ErrorModal;
