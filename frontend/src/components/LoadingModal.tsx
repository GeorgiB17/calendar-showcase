import "../css/app.css";

type LoadingModalProps = {
  text?: string;
};

function LoadingModal({ text = "Loading..." }: Readonly<LoadingModalProps>) {
  return (
    <div className="modal-overlay">
      <div className="modal-content" style={{ textAlign: "center" }}>
        <div
          className="spinner"
          style={{ fontSize: "3rem", marginBottom: "1rem" }}
        >
          ⏳
        </div>
        <h2>{text}</h2>
      </div>
    </div>
  );
}

export default LoadingModal;
