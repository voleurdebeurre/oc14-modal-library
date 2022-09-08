# oc14-modal-library

> A simple react modal library (oc 14)
> It will provide you with a simple black backdrop and a ```div``` to place custom content into.
> As well as close button to hide the modal

[![NPM](https://img.shields.io/npm/v/oc14-modal-library.svg)](https://www.npmjs.com/package/oc14-modal-library) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save oc14-modal-library
```

## Usage
```jsx
// Import the library into the component file that needs to contain the modal
import MyComponent from 'oc14-modal-library'
// Simple css to display the backdrop and close button styles
import 'oc14-modal-library/dist/index.css'

// Your component
function MyComponent() {
  
  // State manager to track if the modal is showing or not
  const [showModal, setShowModal] = useState(false)

  // Function to hide the modal if you need to have another action to close the modal
  const hideModal = () => showModal && setShowModal(false)
  
  return(
    // Your trigger to open the modal - setShowModal(true) should be bound to your trigger element
    <button onClick={() => setShowModal(true)}>Show Modal</button>
    
    // The modal component
    // @params 
    // show: bool - the state of the modal
    // onClickCloseBtn: fun - action on click of the close button
    <Modal show={showModal} onClickCloseBtn={hideModal}>
      // Your custom content goes in here and can be styled freely
      <h1>I am a modal</h1>
    </Modal>
  )
}
```

## License

MIT © [voleurdebeurre](https://github.com/voleurdebeurre)
