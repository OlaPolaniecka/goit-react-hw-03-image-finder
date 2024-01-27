import css from './styles.module.css';

const Modal = ({ closeModal, imageURL, description }) => {
  return (
    <div onClick={closeModal} className={css.Overlay}>
      <div className={css.Modal}>
        <img src={imageURL} alt={description} />
      </div>
    </div>
  );
};

export default Modal;
