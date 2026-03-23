import "./Modal.css";

function DeleteConfirmModal({ open, onClose, onConfirm }) {

  if (!open) return null;

  return (

    <div className="modal-overlay">

      <div className="modal small-modal">

        <h3>Confirm Delete</h3>

        <p>
          Are you sure you want to delete this item?
        </p>

        <div className="modal-actions">

          <button
            className="cancle-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="view-more"
            onClick={onConfirm}
          >
            Yes, Delete
          </button>

        </div>

      </div>

    </div>

  );

}

export default DeleteConfirmModal;