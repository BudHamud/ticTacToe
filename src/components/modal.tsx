import { FunctionalComponent } from "preact";

interface ModalProps {
  onClose: () => void;
  value: string;
}

const Modal: FunctionalComponent<ModalProps> = ({ onClose, value }) => {
  return (
    <section className='wrapper'>
      <div>
        <h3>{value !== 'No one' ? `The winner is ${value}` : `It's a tie!`}</h3>
        <button onClick={onClose}>Close</button>
      </div>
    </section>
  );
};

export default Modal;
