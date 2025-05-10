import { Modal, Box } from "@mui/material";
import { useGodStore } from "../store";
import { God } from "../types/types";

type GodModalProps = {
    god: God
}

export const GodModal = ({god} : GodModalProps) => {
  const modal = useGodStore((state) => state.modal);
  const closeModal = useGodStore((state) => state.closeModal);

  return (
    <Modal open={modal} onClose={closeModal}>
      <Box>
        <p>Texto</p>
      </Box>
    </Modal>
  );
};
