import React, { useState } from 'react'
import Modal from 'oc14-modal-library'

const App = () => {
  const [showModal, setShowModal] = useState(false)
  const hideModal = () => showModal && setShowModal(false)
  return (
    <div>
      <h1 style={{ textAlign: 'center', padding: '10px' }}>react-modal</h1>
      <button onClick={() => setShowModal(true)}>Show Modal</button>
      <Modal show={showModal} onClickCloseBtn={hideModal}>
        <h1>I am a modal</h1>
      </Modal>
    </div>
  )
}

export default App
