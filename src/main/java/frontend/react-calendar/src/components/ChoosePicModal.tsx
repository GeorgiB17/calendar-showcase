import "../css/app.css";

type ChoosePicModal = {
  onClose: () => void;
  setProfilePic?: (pic: string) => void;
};

function ChoosePicModal({ onClose }: Readonly<ChoosePicModal>) {
  return (
    <>
      <div className="modalOverlay">
        <div className="modal-content">
          <button
            type="button"
            onClick={onClose}
            className="close-btn rounded-pill shadow-sm"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}

export default ChoosePicModal;
