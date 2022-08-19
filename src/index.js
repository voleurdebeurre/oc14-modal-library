import React, { Fragment } from 'react';
import Backdrop from './backdrop';

const modalContentStyle = {
  width: "clamp(20rem, 25vw, 62rem)",
  borderRadius: ".5rem",
  background: "#FFF",
}

const modalHeaderButtonStyle = {
  display: "block",
  border: "none",
  background: "transparent",
  width: "auto",
  margin: "0",
  padding: "0",
  marginLeft: "auto",
  position: "fixed",
  top: "1rem",
  right: "1rem",
  zIndex: "6"
}

const modalHeaderIconStyle = {
  width: "1rem",
  fill: "white",
}

const Modal = ({ children, show, onClickCloseBtn }) => {
  return (
    <Fragment>
      {show && (
          <>
          <Backdrop onClick={onClickCloseBtn} />
          <div style={modalContentStyle}>
              <button style={modalHeaderButtonStyle} onClick={onClickCloseBtn}>
                <svg style={modalHeaderIconStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
                </svg>
              </button>
              <div>
                {children}
              </div>
          </div>
          </>
      )}
    </Fragment>
  )
}

export default Modal