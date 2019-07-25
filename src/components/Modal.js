import React, { Component } from 'react'
import { createPortal } from 'react-dom'
import './Modal.scss'

const modalRoot = document.getElementById('modal')

class Portal extends Component {
  render() {
    return createPortal(
      <div className='modal' onClick={this.props.hideModal}>
        <div className='modal__container' onClick={e => e.stopPropagation()}>
          {this.props.children}
        </div>
      </div>,
      modalRoot
    )
  }
}

class Modal extends Component {
  state = { showModal: false }

  handleToggle = () => {
    const modal = document.querySelector('.modal')
    
    if (modal !== null) {
      modal.style.animation = 'zoom-reverse .3s ease-out'
      setTimeout(() => this.setState({ showModal: !this.state.showModal }), 300)
    } else {
      this.setState({ showModal: !this.state.showModal })
    }
  }

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
