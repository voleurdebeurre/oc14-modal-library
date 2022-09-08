import React, { Fragment } from 'react';
import Backdrop from './backdrop';

const modalContentStyle = {
  width: "100%"
}

const Modal = ({ children, show, onClickCloseBtn }) => {
  return (
    <Fragment>
      {show && (
          <>
          <Backdrop onClick={onClickCloseBtn} />
          <div style={modalContentStyle}>
            {children}
          </div>
          </>
      )}
    </Fragment>
  )
}

export default Modal