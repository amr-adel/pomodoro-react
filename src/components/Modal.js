import React, { Component } from 'react'
import { createPortal } from 'react-dom'

const modalRoot = document.getElementById('modal')

const modalBg = {
  position: 'fixed',
  width: '100%',
  height: '100vh',
  top: '0',
  left: '0',
  backgroundColor: 'rgba(4, 4, 4, 0.8)',
  transition: 'all 0.3s ease-out',
  overflow: 'hidden',
  zIndex: '10',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const modalContainer = {
  backgroundColor: '#f2f2f2',
  padding: '4rem',
  width: '70vw',
  maxHeight: '80vh',
  borderRadius: '3px',
  overflow: 'auto'
}

class Portal extends Component {
  render() {
    return createPortal(
      <div style={modalBg} onClick={this.props.hideModal}>
        <div style={modalContainer} onClick={e => e.stopPropagation()}>
          {this.props.children}
        </div>
      </div>,
      modalRoot
    )
  }
}

class Modal extends Component {
  state = { showModal: false }

  handleToggle = () => this.setState({ showModal: !this.state.showModal })

  render() {
    return (
      <>
        <button className='modal-toggler' onClick={() => this.handleToggle()}>
          Open Modal
        </button>
        {this.state.showModal ? <Portal hideModal={this.handleToggle}>Modal content</Portal> : null}
      </>
    )
  }
}

export default Modal
