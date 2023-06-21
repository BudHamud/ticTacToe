import { FunctionalComponent } from "preact";

interface ModalProps {
  onClose: () => void;
  value: string;
}

const Modal: FunctionalComponent<ModalProps> = ({ onClose, value }) => {
  return (
    <section className='wrapper'>
      <div>
        <h3>The winner is {value}</h3>
        <button onClick={onClose}>Close</button>
      </div>
    </section>
  );
};

export default Modal;
