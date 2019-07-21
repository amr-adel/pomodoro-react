import React from 'react'
import MainTimer from './components/MainTimer'
import Controller from './components/Controller'

function App() {
  return (
    <>
      <MainTimer />
      <Controller type='session' />
      <Controller type='break' />
    </>
  )
}

export default App
