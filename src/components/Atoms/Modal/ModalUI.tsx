import { Modal } from "antd";
import ButtonUI from "../Button/Button";

interface ModalUIProps {
  title: string;
  paragraph: string;
  onClose: () => void;
  open: boolean;
}
const ModalUI: React.FC<ModalUIProps> = ({ title, paragraph, onClose, open  }) => {
  return (
    <>
      <Modal title={title} open={open}onCancel={onClose} footer={null}>
        <p className="modal_parag">{paragraph}</p>
        <ButtonUI text="Close" onClick={onClose} />
      </Modal>
    </>
  );
};

export default ModalUI;
