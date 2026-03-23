import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

function DeleteConfirmModal({ open, onClose, onConfirm }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>Confirm Delete</DialogTitle>

      <DialogContent>
        <Typography>Are you sure you want to delete this item?</Typography>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose} variant="outlined">
          Cancel
        </Button>

        <Button onClick={onConfirm} color="error" variant="contained">
          Yes, Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteConfirmModal;
