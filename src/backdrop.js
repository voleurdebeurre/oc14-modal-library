import React from 'react';

const backdropStyles = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, .8)",
    zIndex: "5"
}

const Backdrop = ({ onClick }) => {
    return <div style={backdropStyles} onClick={onClick} />
}

export default Backdrop