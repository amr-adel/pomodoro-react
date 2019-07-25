import React from 'react'
import MainTimer from './components/MainTimer'
import Controller from './components/Controller'
import TimerContextProvider from './contexts/TimerContext'
import Modal from './components/Modal'
import ModalContent from './components/ModalContent'

function App() {
  return (
    <>
      <TimerContextProvider>
        <MainTimer />
        <Controller controllerLabel='session' />
        <Controller controllerLabel='break' />
      </TimerContextProvider>
      <Modal>
        <ModalContent />
      </Modal>
    </>
  )
}

export default App
