import React from 'react';
import PropTypes from 'prop-types';

const Dialog = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="dialog">
      <div className="dialog__heading">
        <div className="dialog__title">{title}</div>
        <button className="dialog__close-btn" onClick={onClose}>
          +
        </button>
      </div>
      <div className="dialog__content">{children}</div>
    </div>
  );
};

Dialog.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
};

Dialog.defaultProps = {
  isOpen: false,
  title: '',
};
export default Dialog;
