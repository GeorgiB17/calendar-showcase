import "../css/app.css";

type SuccessModalProps = {
  text?: string;
  onClose: () => void;
};

function SuccessModal({
  text = "Success!",
  onClose,
}: Readonly<SuccessModalProps>) {
  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ textAlign: "center" }}>
        <h2>{text}</h2>
        <div
          style={{
            fontSize: "3rem",
            color: "green",
            marginBottom: "1rem",
          }}
        >
          ✅
        </div>

        <button
          onClick={onClose}
          className="modal-btn rounded-pill px-4 shadow-sm"
          id="modal-btn-submit"
          style={{ marginTop: "20px", alignSelf: "flex-end" }}
        >
          Ok
        </button>
      </div>
    </div>
  );
}

export default SuccessModal;
